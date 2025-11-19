import { notifications } from "@mantine/notifications";
import { NOTIFICATIONS_TRANSITION_MS } from "@/shared/config/notifications";

export const customShowNotification = (
    props: Parameters<typeof notifications.show>[0],
) => {
    // * If id is provided, hide the notification with this id and
    // * show a new one with the same props for animation
    if (props.id) {
        notifications.hide(props.id);
        setTimeout(() => {
            notifications.show(props);
        }, NOTIFICATIONS_TRANSITION_MS);
    } else {
        notifications.show(props);
    }
};

export const customNotifications = () => {
    return {
        show: customShowNotification,
        hide: notifications.hide,
        clean: notifications.clean,
        update: notifications.update,
    };
};
