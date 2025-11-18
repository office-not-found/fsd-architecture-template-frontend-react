import { useQuery } from "@tanstack/react-query";
import { EQueryKeys } from "@/shared/config/query";
import { fetchUserById } from "../api";

export const useGetUserByIDQuery = (id: number | string) => {
    const query = useQuery({
        queryKey: [EQueryKeys.USERS, id],
        queryFn: () => fetchUserById(id)
    });

    return query;
};
