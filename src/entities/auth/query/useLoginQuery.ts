import { useMutation, useQueryClient } from "@tanstack/react-query";
import { EQueryKeys } from "@/shared/config/query";
import { fetchLogin } from "../api";

export const useLoginMutation = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationKey: [EQueryKeys.AUTH],
        mutationFn: fetchLogin,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [EQueryKeys.ACCOUNT] })
    });

    return mutation;
};
