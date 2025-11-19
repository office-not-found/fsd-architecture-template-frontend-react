import { useMutation } from "@tanstack/react-query";
import { EQueryKeys } from "@/shared/config/query";
import { customShowNotification } from "@/shared/lib/customNotifications";
import { invalidateQueriesByKeys } from "@/shared/lib/invalidateQueriesByKeys";
import { deleteUser } from "../api";

export const useDeleteUserMutation = () => {
    const mutation = useMutation({
        mutationFn: deleteUser,
        onSuccess: (_, ids) => {
            invalidateQueriesByKeys([EQueryKeys.USERS, EQueryKeys.ACCOUNT]);

            customShowNotification({
                id: `delete-user-form-${ids}`,
                title: "User deleted",
                message: `Users with ids ${ids.join(", ")} have been deleted successfully`,
            });
        },
    });

    return mutation;
};
