import { useAccountStore } from "@/entities/account";
import { filterUserPageData } from "../model";

export const useGetFilters = () => {
    const { roleName: roleOptions } = useAccountStore((store) => store.options);

    const result = filterUserPageData?.map((filter) => {
        switch (filter?.paramsKey) {
            case "roleName":
                return { ...filter, options: roleOptions };
            default:
                return filter;
        }
    });
    return result;
};
