import { Modal as ModalFromLibUi } from "@mantine/core";
import type { ComponentProps } from "react";

interface ModalProps extends ComponentProps<typeof ModalFromLibUi> {}

export const Modal = ({ ...props }: ModalProps) => (
    <ModalFromLibUi
        centered
        styles={{
            content: {
                background: "var(--mantine-color-backgroundBasic-0)"
            },
            header: {
                background: "var(--mantine-color-backgroundBasic-0)",
                padding: "24px 16px 12px 16px"
            },
            title: {
                fontSize: "20px",
                fontWeight: "700",
                color: "var(--mantine-color-white-0)"
            }
        }}
        {...props}
    />
);
