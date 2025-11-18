import { Checkbox as CheckboxFromLibUi } from "@mantine/core";
import type { ComponentProps } from "react";

interface CheckboxProps extends ComponentProps<typeof CheckboxFromLibUi> {}

export const Checkbox = ({ ...props }: CheckboxProps) => (
    <CheckboxFromLibUi iconColor="background" {...props} />
);
