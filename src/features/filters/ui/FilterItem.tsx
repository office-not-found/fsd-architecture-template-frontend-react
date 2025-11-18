import { X } from "lucide-react";
import { Select, TextInput } from "@/shared/ui";
import { useFilterItem } from "../lib";
import type { Filter } from "../model";
import styles from "./filters.module.scss";

interface FilterItemProps {
    filter: Filter;
    value: string | undefined;
    onChange: (value: string) => void;
    onDropdownOpen: () => void;
    onDropdownClose: () => void;
}

export const FilterItem = ({
    filter,
    value,
    onChange,
    onDropdownOpen,
    onDropdownClose
}: FilterItemProps) => {
    const { label, type, placeholder } = filter;
    const { inputValue, handleChangeInputValue, handleChangeSelectValue } = useFilterItem(
        { value, onChange }
    );

    return (
        <div className={styles["filters__item"]}>
            <div className={styles["filters__label"]}>{label}</div>
            {type === "select" && (
                <Select
                    key={value}
                    value={value}
                    onChange={handleChangeSelectValue}
                    data={filter.options}
                    placeholder={placeholder}
                    onDropdownOpen={onDropdownOpen}
                    onDropdownClose={onDropdownClose}
                />
            )}
            {type === "input" && (
                <TextInput
                    value={inputValue || ""}
                    onChange={(e) => handleChangeInputValue(e.currentTarget.value)}
                    placeholder={placeholder}
                    rightSection={
                        value && (
                            <X onClick={() => handleChangeInputValue("")} width={15} />
                        )
                    }
                />
            )}
        </div>
    );
};
