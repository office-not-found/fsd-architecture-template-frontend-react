import { Table } from "@/shared/ui";
import type { TableWithActionsBodyProps } from "../../model";
import { TableWithActionsRowMemoized } from "../table-with-actions-row";
import styles from "./tableWithActionBody.module.scss";

export const TableWithActionsBody = <T extends { id: number }>({
    data,
    columns,
    renderBodyRow,
    selectedIds,
    handlers,
}: TableWithActionsBodyProps<T>) => (
    <Table.Tbody>
        <Table.Tr className={styles["table-with-actions-body__row_separator"]} />
        {data.map((row, index) => (
            <TableWithActionsRowMemoized
                key={row.id}
                row={row}
                columns={columns}
                isChecked={selectedIds.has(row.id)}
                toggleSelection={handlers.toggleSelection}
                index={index}
                renderBodyRow={renderBodyRow}
            />
        ))}
    </Table.Tbody>
);
