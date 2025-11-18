import axios from "axios";
import { customShowNotification } from "./customNotifications";

const DEFAULT_MESSAGE = "Something went wrong";

export const throwErrorToast = (error: unknown) => {
    let errorMessage: string | string[] = DEFAULT_MESSAGE;

    if (axios.isAxiosError(error)) {
        const message = error.response?.data?.message || error.message;

        if (Array.isArray(message)) {
            errorMessage = message.join(";\n");
        } else if (typeof message === "object") {
            errorMessage = JSON.stringify(message);
        }

        if (typeof message === "string") errorMessage = message;
    }

    customShowNotification({
        id: "api-error",
        title: "Error occurred",
        message: errorMessage,
        color: "red"
    });
};
