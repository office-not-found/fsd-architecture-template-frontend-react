import { useClickOutside } from "@mantine/hooks";
import { useState } from "react";
import { useSearchParamsObject } from "@/shared/lib";
import type { PartialNonSortParams } from "@/shared/model";
import type { Filter } from "../model";

interface useFiltersParams {
    filters: Filter[];
}

export const useFilters = ({ filters }: useFiltersParams) => {
    const paramKeys = filters?.map((filter) => filter?.paramsKey);
    const { params, setSearchParamsObject } = useSearchParamsObject(paramKeys);

    const [opened, setOpened] = useState(false);
    const [draft, setDraft] = useState<PartialNonSortParams>(params);

    const [dropdown, setDropdown] = useState<HTMLDivElement | null>(null);
    const [trigger, setTrigger] = useState<HTMLElement | null>(null);
    const [selectOpen, setSelectOpen] = useState(false);

    const disabledClearAllButton = Object.keys(draft).length === 0;

    useClickOutside(
        () => {
            if (!selectOpen) {
                setOpened(false);
            }
        },
        null,
        [dropdown, trigger],
    );

    const updateDraft = (key: keyof PartialNonSortParams, value: string) => {
        setDraft((prev) => {
            const isEmpty = value === "";

            const updated = { ...prev };

            if (isEmpty) {
                delete updated[key];
            } else {
                updated[key] = value;
            }

            return updated;
        });
    };

    const applyFilters = () => {
        const updatedParams: PartialNonSortParams = {};

        for (const key of Object.keys(draft) as (keyof PartialNonSortParams)[]) {
            const value = draft[key];

            if (typeof value === "string" && value.trim() !== "") {
                updatedParams[key] = value;
            } else {
                updatedParams[key] = undefined;
            }
        }

        for (const key of Object.keys(params) as (keyof PartialNonSortParams)[]) {
            if (params[key] && !draft[key]) {
                updatedParams[key] = undefined;
            }
        }

        setSearchParamsObject(updatedParams);
        setOpened(false);
    };

    const handleClearAll = () => {
        const clearedParams: PartialNonSortParams = {};
        setDraft({});
        paramKeys.forEach((key) => {
            clearedParams[key] = undefined;
        });
        setSearchParamsObject(clearedParams);
    };

    return {
        opened,
        setOpened,
        setTrigger,
        setDropdown,
        draft,
        updateDraft,
        setSelectOpen,
        disabledClearAllButton,
        applyFilters,
        handleClearAll,
    };
};
