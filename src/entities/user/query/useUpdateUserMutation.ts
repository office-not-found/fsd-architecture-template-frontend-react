import { useMutation } from "@tanstack/react-query";
import { EQueryKeys } from "@/shared/config/query";
import { invalidateQueriesByKeys } from "@/shared/lib/invalidateQueriesByKeys";
import { updateUser } from "../api";

export const useUpdateUserMutation = () => {
    const mutation = useMutation({
        mutationFn: updateUser,
        onSuccess: () => invalidateQueriesByKeys([EQueryKeys.USERS, EQueryKeys.ACCOUNT])
    });

    return mutation;
};
