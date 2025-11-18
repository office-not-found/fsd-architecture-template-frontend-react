import { Table as TableFromLibUi } from "@mantine/core";
import clsx from "clsx";
import type { ComponentPropsWithoutRef } from "react";
import styles from "./table.module.scss";

interface TableProps extends ComponentPropsWithoutRef<typeof TableFromLibUi> {}

const TableRoot = ({ className, ...props }: TableProps) => (
    <TableFromLibUi className={clsx(styles.table, className)} {...props} />
);

const Thead = (props: ComponentPropsWithoutRef<typeof TableFromLibUi.Thead>) => (
    <TableFromLibUi.Thead {...props} />
);

const Tbody = (props: ComponentPropsWithoutRef<typeof TableFromLibUi.Tbody>) => (
    <TableFromLibUi.Tbody {...props} />
);

const Tr = (props: ComponentPropsWithoutRef<typeof TableFromLibUi.Tr>) => (
    <TableFromLibUi.Tr {...props} />
);

const Th = (props: ComponentPropsWithoutRef<typeof TableFromLibUi.Th>) => (
    <TableFromLibUi.Th {...props} />
);

const Td = (props: ComponentPropsWithoutRef<typeof TableFromLibUi.Td>) => (
    <TableFromLibUi.Td {...props} />
);

const Tfoot = (props: ComponentPropsWithoutRef<typeof TableFromLibUi.Tfoot>) => (
    <TableFromLibUi.Tfoot {...props} />
);

const Caption = (props: ComponentPropsWithoutRef<typeof TableFromLibUi.Caption>) => (
    <TableFromLibUi.Caption {...props} />
);

const ScrollContainer = (
    props: ComponentPropsWithoutRef<typeof TableFromLibUi.ScrollContainer>
) => <TableFromLibUi.ScrollContainer {...props} />;

export const Table = Object.assign(TableRoot, {
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Tfoot,
    Caption,
    ScrollContainer
});
