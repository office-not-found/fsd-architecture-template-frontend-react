import { memoWithGeneric } from "@/shared/lib";
import type { TableColumn } from "@/shared/model";
import type { TableWithActionsRenderBodyRow } from "../../model";

interface TableWithActionsRowProps<T extends { id: number }> {
    row: T;
    columns: TableColumn<T>[];
    isChecked: boolean;
    toggleSelection: (id: number) => void;
    index: number;
    renderBodyRow: TableWithActionsRenderBodyRow<T>;
}

export const TableWithActionsRow = <T extends { id: number }>({
    row,
    columns,
    isChecked,
    toggleSelection,
    index,
    renderBodyRow
}: TableWithActionsRowProps<T>) =>
    renderBodyRow(row, columns, isChecked, toggleSelection, index);

export const TableWithActionsRowMemoized = memoWithGeneric(TableWithActionsRow);
