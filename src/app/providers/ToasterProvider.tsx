import { Notifications } from "@mantine/notifications";
import type { PropsWithChildren } from "react";
import {
    NOTIFICATIONS_TIME_CLOSE_MS,
    NOTIFICATIONS_TRANSITION_MS,
} from "@/shared/config/notifications";

export const ToasterProvider = ({ children }: PropsWithChildren) => (
    <>
        {children}
        <Notifications
            autoClose={NOTIFICATIONS_TIME_CLOSE_MS}
            position="top-right"
            transitionDuration={NOTIFICATIONS_TRANSITION_MS}
        />
    </>
);
