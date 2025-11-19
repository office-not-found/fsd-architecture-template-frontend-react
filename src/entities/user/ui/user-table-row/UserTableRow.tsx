import { type ReactNode } from "react";
import type { IUserDetailedItem } from "@/entities/user";
import { fromCamelCaseTransform } from "@/shared/lib";
import { getFullDate } from "@/shared/lib/formatDate";
import type { TableColumn } from "@/shared/model";
import { Checkbox, Switch, Table } from "@/shared/ui";
import styles from "./userTableRow.module.scss";

interface UserTableRowProps {
    data: IUserDetailedItem;
    columns: TableColumn<IUserDetailedItem>[];
    index: number;
    renderActions?: (item: IUserDetailedItem) => ReactNode;
    isChecked: boolean;
    onToggle: () => void;
}

export const UserTableRow = ({
    data,
    columns,
    index,
    renderActions,
    isChecked,
    onToggle,
}: UserTableRowProps) => {
    return (
        <Table.Tr>
            {columns.map((column) => {
                if (column.type === "entry") {
                    switch (column.keyInEntry) {
                        case "isBlocked": {
                            return (
                                <Table.Td key={column.keyInEntry}>
                                    <Switch
                                        classNames={{ body: styles.switch_body }}
                                        checked={data[column.keyInEntry] as boolean}
                                        disabled
                                    />
                                </Table.Td>
                            );
                        }
                        case "createdAt":
                        case "updatedAt":
                            return (
                                <Table.Td key={column.keyInEntry}>
                                    {getFullDate(data[column.keyInEntry])}
                                </Table.Td>
                            );
                        case "roleName":
                            return (
                                <Table.Td key={column.keyInEntry}>
                                    {fromCamelCaseTransform(data[column.keyInEntry])}
                                </Table.Td>
                            );
                        default: {
                            return (
                                <Table.Td key={column.keyInEntry}>
                                    {String(data[column.keyInEntry] || "—")}
                                </Table.Td>
                            );
                        }
                    }
                }

                if (column.type === "raw") {
                    switch (column.key) {
                        case "№":
                            return <Table.Td key={column.key}>{index}</Table.Td>;

                        case "selector":
                            return (
                                <Table.Td key={column.key}>
                                    <div className={styles["selector-container"]}>
                                        <Checkbox
                                            checked={isChecked}
                                            onChange={onToggle}
                                        />
                                    </div>
                                </Table.Td>
                            );

                        case "actions":
                            return (
                                <Table.Td key={column.key}>
                                    {renderActions?.(data)}
                                </Table.Td>
                            );

                        default:
                            return <Table.Td key={column.key}>—</Table.Td>;
                    }
                }

                return null;
            })}
        </Table.Tr>
    );
};
