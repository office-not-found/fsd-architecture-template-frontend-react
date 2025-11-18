import { QueryClient } from "@tanstack/react-query";
import { throwErrorToast } from "../lib";

export const enum EQueryKeys {
    AUTH = "auth",
    ACCOUNT = "account",
    USERS = "users",
    PARTNERS = "partners"
}

export const queryClient = new QueryClient({
    defaultOptions: {
        mutations: {
            onError: (error) => {
                if (error.response?.status !== 401) throwErrorToast(error);
            }
        },
        queries: {
            placeholderData: (previousData: unknown) => previousData, // Show previous data while fetching new data
            staleTime: 60 * 1000, // 1 minute - data is considered fresh
            gcTime: 5 * 60 * 1000, // 5 minutes - time to live in cache
            refetchOnWindowFocus: false,
            retry: (failureCount, error) => {
                if (error.response?.status === 401) {
                    return false;
                }

                return failureCount <= 1;
            },
            throwOnError: (error) => {
                if (error.response?.status !== 401) throwErrorToast(error);

                return false;
            }
        }
    }
});
