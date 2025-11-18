import { useQuery } from "@tanstack/react-query";
import { EQueryKeys } from "@/shared/config/query";
import { useSearchParamsObject } from "@/shared/lib";
import { fetchUsers } from "../api";

export const useGetAllUsersQuery = () => {
    const { params } = useSearchParamsObject([
        "page",
        "search",
        "roleName",
        "id",
        "isBlocked",
        "updatedAt",
        "createdAt"
    ]);

    const query = useQuery({
        queryKey: [EQueryKeys.USERS, params],
        queryFn: () => fetchUsers(params),
        enabled: !!params.page
    });

    return query;
};
