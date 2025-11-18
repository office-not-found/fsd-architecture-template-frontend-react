import { useDebouncedCallback } from "@mantine/hooks";
import { useEffect, useState, type ChangeEvent } from "react";
import { useSearchParamsObject } from "@/shared/lib";

const DEBOUNCE_DELAY = 500;

export const useSearchInput = () => {
    const { params } = useSearchParamsObject(["search"]);
    const [searchValue, setSearchValue] = useState(params.search);

    const { setSearchParamsObject } = useSearchParamsObject();
    const debouncedSetSearchParamsObject = useDebouncedCallback((value: string) => {
        setSearchParamsObject({ search: value.trim() || undefined });
    }, DEBOUNCE_DELAY);

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;

        setSearchValue(value);
    };

    const handleClearSearch = () => setSearchValue("");

    useEffect(() => {
        debouncedSetSearchParamsObject(searchValue ?? "");
    }, [searchValue]);

    return {
        searchValue,
        handleSearchChange,
        handleClearSearch
    };
};
