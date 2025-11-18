import { LoadingOverlay } from "@mantine/core";
import type { ComponentProps } from "react";

interface LoaderOverlayProps extends ComponentProps<typeof LoadingOverlay> {}

export const LoaderOverlay = ({ ...props }: LoaderOverlayProps) => (
    <LoadingOverlay {...props} />
);
