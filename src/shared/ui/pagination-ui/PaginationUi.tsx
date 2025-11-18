import { Pagination as PaginationFromLibUi } from "@mantine/core";
import clsx from "clsx";
import type { ComponentProps } from "react";
import styles from "./paginationUi.module.scss";

interface PaginationUiProps extends ComponentProps<typeof PaginationFromLibUi> {}

export const PaginationUi = ({ className, ...props }: PaginationUiProps) => (
    <PaginationFromLibUi
        className={clsx(styles["pagination-ui"], className)}
        {...props}
    />
);
