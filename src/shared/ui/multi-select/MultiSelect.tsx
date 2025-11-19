import { MultiSelect as MultiSelectFromLibUi } from "@mantine/core";
import type { ComponentProps } from "react";

interface MultiSelectProps
    extends Omit<ComponentProps<typeof MultiSelectFromLibUi>, "value"> {
    value: string | string[] | undefined;
}

export const MultiSelect = ({ value, ...props }: MultiSelectProps) => (
    <MultiSelectFromLibUi
        hidePickedOptions
        value={Array.isArray(value) ? value : value ? [value] : []}
        styles={() => ({
            pill: {
                background: "var(--mantine-color-backgroundBasic-0)",
                borderRadius: "8px",
            },
        })}
        {...props}
    />
);
