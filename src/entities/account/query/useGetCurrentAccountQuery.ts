import { useQuery } from "@tanstack/react-query";
import { EQueryKeys } from "@/shared/config/query";
import { fromCamelCaseTransform } from "@/shared/lib";
import { fetchAccountGetMe } from "../api";
import { useAccountStore } from "../model";

export const useGetCurrentAccountQuery = () => {
    const setAccount = useAccountStore((state) => state.setAccount);

    const queryFn = async () => {
        const { data } = await fetchAccountGetMe();

        const accountWithOptions = {
            ...data,
            options: {
                roleName: data.roleName.map((role) => ({
                    value: role.name,
                    label: fromCamelCaseTransform(role.name),
                })),
            },
        };

        setAccount(accountWithOptions);

        return data;
    };

    const query = useQuery({
        queryKey: [EQueryKeys.ACCOUNT],
        queryFn,
    });

    return query;
};
