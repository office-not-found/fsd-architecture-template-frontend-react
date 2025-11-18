import { Tooltip as TooltipFromLibUi } from "@mantine/core";
import clsx from "clsx";
import type { ComponentProps } from "react";
import styles from "./tooltip.module.scss";

interface TooltipProps extends ComponentProps<typeof TooltipFromLibUi> {}

export const Tooltip = ({ className, ...props }: TooltipProps) => (
    <TooltipFromLibUi className={clsx(styles.tooltip, className)} {...props} />
);
