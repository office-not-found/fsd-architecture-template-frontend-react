import { Select as SelectFromLibUi } from "@mantine/core";
import type { ComponentProps } from "react";

interface SelectProps extends ComponentProps<typeof SelectFromLibUi> {}

export const Select = ({ ...props }: SelectProps) => (
    <SelectFromLibUi searchable clearable maxDropdownHeight={300} {...props} />
);
