import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import { EQueryKeys } from "@/shared/config/query";
import { fetchLogout } from "../api";

interface UseLogoutQueryArgs extends Omit<UseQueryOptions, "queryKey" | "queryFn"> {}

export const useLogoutQuery = ({ ...options }: UseLogoutQueryArgs) => {
    const query = useQuery({
        queryKey: [EQueryKeys.AUTH],
        queryFn: fetchLogout,
        ...options
    });

    return query;
};
