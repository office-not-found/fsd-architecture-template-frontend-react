import { useDebouncedCallback } from "@mantine/hooks";
import { useEffect, useState } from "react";

interface useFilterItemParams {
    value: string | undefined;
    onChange: (value: string) => void;
}

export const useFilterItem = ({ value, onChange }: useFilterItemParams) => {
    const [inputValue, setInputValue] = useState(value);

    const debouncedOnChange = useDebouncedCallback(
        (newValue: string) => onChange(newValue || ""),
        100,
    );

    const handleChangeSelectValue = (val: string | null) => {
        onChange(val || "");
    };

    const handleChangeInputValue = (newValue: string) => {
        setInputValue(newValue);
        debouncedOnChange(newValue);
    };

    useEffect(() => handleChangeInputValue(value || ""), [value]);

    return {
        inputValue,
        setInputValue,
        debouncedOnChange,
        handleChangeSelectValue,
        handleChangeInputValue,
    };
};
