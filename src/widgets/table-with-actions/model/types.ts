import type { UseMutateAsyncFunction } from "@tanstack/react-query";
import type { ReactNode } from "react";
import type { Filter } from "@/features/filters";
import type { TableColumn } from "@/shared/model";

export type TableWithActionsRenderBodyRow<T extends { id: number }> = (
    row: T,
    columns: TableColumn<T>[],
    isChecked: boolean,
    toggleSelection: (id: number) => void,
    index: number,
) => ReactNode;

export interface FieldsConfiguratorData<T extends { id: number }> {
    setColumn: (columns: TableColumn<T>[]) => void;
    columns: TableColumn<T>[];
}

export interface TableWithActionsProps<T extends { id: number }> {
    columns: TableColumn<T>[];
    data: T[];
    loading?: boolean;
    filters?: Filter[];
    onMultipleDelete?:
        | ((ids: number[]) => Promise<void> | void)
        | UseMutateAsyncFunction<any, Error, number[], unknown>;
    fieldsConfiguratorData?: FieldsConfiguratorData<T>;
    paginationData?: {
        currentPage?: number;
        totalPages?: number;
    };
    renderBodyRow: TableWithActionsRenderBodyRow<T>;
    noDataText?: string;
}

export interface TableSelectionHandlers {
    isSelected: (id: number) => boolean;
    toggleSelection: (id: number) => void;
    selectAll: () => void;
    deselectAll: () => void;
}

export interface TableWithActionsHeaderProps<T extends { id: number }> {
    columns: TableColumn<T>[];
    handlers?: TableSelectionHandlers;
    allChecked?: boolean;
    indeterminate?: boolean;
}

export interface TableWithActionsToolbarProps<T extends { id: number }> {
    filters?: Filter[];
    hasChecked: boolean;
    handleActionWithSelected: () => Promise<void>;
    fieldsConfiguratorData?: FieldsConfiguratorData<T>;
    columns: TableColumn<T>[];
}

export interface TableWithActionsBodyProps<T extends { id: number }> {
    data: T[];
    columns: TableColumn<T>[];
    renderBodyRow: TableWithActionsRenderBodyRow<T>;
    selectedIds: Set<number>;
    handlers: {
        toggleSelection: (id: number) => void;
    };
}
