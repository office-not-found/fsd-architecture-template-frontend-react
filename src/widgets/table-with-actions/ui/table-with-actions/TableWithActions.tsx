import { Pagination } from "@/features/pagination";
import { useTableSelection } from "@/features/table-selection";
import { LoaderOverlay, Table } from "@/shared/ui";
import type { TableWithActionsProps } from "../../model";
import { TableWithActionsBody } from "../table-with-actions-body";
import { TableWithActionsHeader } from "../table-with-actions-header";
import { TableWithActionsToolbar } from "../table-with-actions-toolbar";
import styles from "./tableWithActions.module.scss";

export function TableWithActions<T extends { id: number }>({
    columns,
    data,
    loading,
    renderBodyRow,
    filters,
    fieldsConfiguratorData,
    onMultipleDelete,
    paginationData,
    noDataText = "No data",
}: TableWithActionsProps<T>) {
    const {
        selectedIds,
        handlers,
        allChecked,
        hasChecked,
        indeterminate,
        handleActionWithSelected,
    } = useTableSelection({ data, actionWithSelected: onMultipleDelete });

    return (
        <div className={styles["table-with-actions"]}>
            <TableWithActionsToolbar
                filters={filters}
                hasChecked={hasChecked}
                handleActionWithSelected={handleActionWithSelected}
                fieldsConfiguratorData={fieldsConfiguratorData}
                columns={columns}
            />
            <div className={styles["table-with-actions__table"]}>
                <LoaderOverlay visible={loading} />
                {data.length === 0 ? (
                    <div className={styles["table-with-actions__no-data"]}>
                        {noDataText}
                    </div>
                ) : (
                    <Table stickyHeader>
                        <TableWithActionsHeader
                            columns={columns}
                            handlers={handlers}
                            allChecked={allChecked}
                            indeterminate={indeterminate}
                        />
                        <TableWithActionsBody
                            data={data}
                            columns={columns}
                            selectedIds={selectedIds}
                            handlers={handlers}
                            renderBodyRow={renderBodyRow}
                        />
                    </Table>
                )}
            </div>
            <div className={styles["table-with-actions__pagination"]}>
                <Pagination total={paginationData?.totalPages} />
            </div>
        </div>
    );
}
