import { useMutation } from "@tanstack/react-query";
import { EQueryKeys } from "@/shared/config/query";
import { invalidateQueriesByKeys } from "@/shared/lib/invalidateQueriesByKeys";
import { createUser } from "../api";

export const useCreateUserMutation = () => {
    const mutation = useMutation({
        mutationFn: createUser,
        onSuccess: () => invalidateQueriesByKeys([EQueryKeys.USERS, EQueryKeys.ACCOUNT])
    });

    return mutation;
};
