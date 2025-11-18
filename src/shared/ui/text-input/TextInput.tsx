import { TextInput as TextInputFromLibUi } from "@mantine/core";
import type { ComponentProps } from "react";

interface TextInputProps extends ComponentProps<typeof TextInputFromLibUi> {}

export const TextInput = ({ ...props }: TextInputProps) => (
    <TextInputFromLibUi {...props} />
);
