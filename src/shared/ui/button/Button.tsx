import {
    createPolymorphicComponent,
    Button as ButtonFromLibUi,
    type ButtonProps
} from "@mantine/core";
import { forwardRef } from "react";

interface CustomButtonProps extends ButtonProps {}

export const Button = createPolymorphicComponent<"button", CustomButtonProps>(
    forwardRef<HTMLButtonElement, CustomButtonProps>(({ children, ...others }, ref) => (
        <ButtonFromLibUi {...others} ref={ref}>
            {children}
        </ButtonFromLibUi>
    ))
);
