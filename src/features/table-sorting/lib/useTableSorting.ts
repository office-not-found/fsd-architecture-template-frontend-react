import { useCallback } from "react";
import { useSearchParamsObject } from "@/shared/lib";
import type { SortDirection, URLSortParamsKey } from "@/shared/model";

export const useTableSorting = (columnKey: URLSortParamsKey) => {
    const { params, setSearchParamsObject } = useSearchParamsObject();

    const currentDirection = params[columnKey];

    const handleSort = useCallback(() => {
        let newDirection: SortDirection;
        const newParams = { ...params };

        Object.entries(params).forEach((param) => {
            const key = param[0] as URLSortParamsKey;
            const value = param[1];

            if (value === "asc" || value === "desc") {
                newParams[key] = undefined;
            }
        });

        if (currentDirection === "asc") {
            newDirection = "desc";
        } else if (currentDirection === "desc") {
            newDirection = undefined;
        } else {
            newDirection = "asc";
        }

        setSearchParamsObject({
            ...newParams,
            [columnKey]: newDirection
        });
    }, [columnKey, currentDirection, params, setSearchParamsObject]);

    return { currentDirection, handleSort };
};
