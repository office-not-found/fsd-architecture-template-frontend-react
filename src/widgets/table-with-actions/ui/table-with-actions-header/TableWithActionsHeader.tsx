import { TableSelector } from "@/features/table-selection";
import { SortButtons } from "@/features/table-sorting";
import { Table } from "@/shared/ui";
import type { TableWithActionsHeaderProps } from "../../model";
import styles from "./tableWithActionsHeader.module.scss";

export function TableWithActionsHeader<T extends { id: number }>({
    columns,
    handlers,
    allChecked = false,
    indeterminate = false,
}: TableWithActionsHeaderProps<T>) {
    return (
        <Table.Thead>
            <Table.Tr>
                {columns.map((column) => {
                    const label = column.label;

                    if (column.type === "raw" && column.key === "selector")
                        return (
                            <Table.Th
                                key={label}
                                className={
                                    styles["table-with-actions-header__th-selector"]
                                }
                            >
                                <TableSelector
                                    checked={allChecked}
                                    indeterminate={indeterminate}
                                    onChange={() =>
                                        allChecked
                                            ? handlers?.deselectAll()
                                            : handlers?.selectAll()
                                    }
                                    className={
                                        styles["table-with-actions-header__selector"]
                                    }
                                />
                            </Table.Th>
                        );

                    if (!column.sortKey) return <Table.Th key={label}>{label}</Table.Th>;

                    return (
                        <Table.Th key={label}>
                            <SortButtons columnKey={column.sortKey} label={label} />
                        </Table.Th>
                    );
                })}
            </Table.Tr>
        </Table.Thead>
    );
}
