import { queryClient } from "@/shared/config/query";

export const invalidateQueriesByKeys = (keys: string[]) => {
    queryClient.invalidateQueries({
        predicate: (query) => {
            return query.queryKey.some(
                (key) => typeof key === "string" && keys.includes(key),
            );
        },
    });
};
