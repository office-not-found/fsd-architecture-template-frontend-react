import axios, { type AxiosError, type AxiosResponse } from "axios";
import { ROUTES } from "../config/routes";

export const paramsSerializer = (params: Record<string, any>) => {
    const searchParams = new URLSearchParams();

    for (const key in params) {
        const value = params[key];
        if (Array.isArray(value)) {
            value.forEach((item, i) => {
                searchParams.append(`${key}[${i}]`, item);
            });
        } else if (value !== undefined && value !== null) {
            searchParams.append(key, value);
        }
    }

    return searchParams.toString();
};

export const instanceApi = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}/`,
    withCredentials: true,
    paramsSerializer,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
});

export const fetchRefresh = () => instanceApi.get("/auth/refresh");

let refreshPromise: Promise<AxiosResponse> | null = null;
const refreshWithoutRepeats = async () => {
    const localCopy = refreshPromise;
    let response: AxiosResponse;

    if (localCopy && refreshPromise) {
        response = await refreshPromise;
    } else {
        refreshPromise = fetchRefresh();
        const copy = refreshPromise;
        response = await copy;
        refreshPromise = null;
    }

    return response;
};

const onFulfilled = (response: AxiosResponse) => response;

const onRejected = async (error: AxiosError) => {
    if (
        error.response?.status === 401 &&
        error.config &&
        error.config.url &&
        !error.config.url.includes("refresh") &&
        !error.config._isRetry
    ) {
        const originalRequest = error.config;
        originalRequest._isRetry = true;

        try {
            await refreshWithoutRepeats();
            return instanceApi.request(originalRequest);
        } catch (error) {
            if (window.location.pathname !== ROUTES.LOGIN) {
                window.location.href = ROUTES.LOGIN;
            }
            console.error(error);
        }
    }

    throw error;
};

instanceApi.interceptors.response.use(onFulfilled, onRejected);
