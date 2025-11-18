import { SearchIcon, X } from "lucide-react";
import type { ComponentProps } from "react";
import { TextInput } from "../text-input";

interface SearchInputUiProps extends ComponentProps<typeof TextInput> {
    iconProps?: ComponentProps<typeof SearchIcon>;
    clearIconProps?: ComponentProps<typeof X>;
    onClickClear?: () => void;
}

export const SearchInputUi = ({
    iconProps,
    clearIconProps,
    value,
    onClickClear,
    ...props
}: SearchInputUiProps) => (
    <TextInput
        value={value}
        leftSection={<SearchIcon size={20} {...iconProps} />}
        rightSection={
            value && <X width={15} onClick={onClickClear} {...clearIconProps} />
        }
        placeholder="Search..."
        {...props}
    />
);
