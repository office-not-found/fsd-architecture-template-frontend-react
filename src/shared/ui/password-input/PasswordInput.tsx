import { PasswordInput as PasswordInputFromLibUi } from "@mantine/core";
import type { ComponentProps } from "react";

interface PasswordInputProps extends ComponentProps<typeof PasswordInputFromLibUi> {}

export const PasswordInput = ({ ...props }: PasswordInputProps) => (
    <PasswordInputFromLibUi {...props} />
);
