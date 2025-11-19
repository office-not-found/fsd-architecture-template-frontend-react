import { Filters } from "@/features/filters";
import { SearchInput } from "@/features/search-input";
import { TableFieldsConfigurator } from "@/features/table-fields-configurator";
import { TableSelectionToolbar } from "@/features/table-selection";
import type { TableWithActionsToolbarProps } from "../../model";
import styles from "./tableWithActionsToolbar.module.scss";

export const TableWithActionsToolbar = <T extends { id: number }>({
    filters,
    hasChecked,
    handleActionWithSelected,
    fieldsConfiguratorData,
    columns,
}: TableWithActionsToolbarProps<T>) => {
    return (
        <div className={styles["table-with-actions-toolbar__header"]}>
            <div className={styles["table-with-actions-toolbar__left-area"]}>
                <SearchInput />
                {filters && filters.length !== 0 && <Filters filters={filters} />}
                <TableSelectionToolbar
                    hasChecked={hasChecked}
                    onDelete={handleActionWithSelected}
                />
            </div>
            <div>
                {fieldsConfiguratorData && columns.length !== 0 && (
                    <TableFieldsConfigurator
                        columns={fieldsConfiguratorData.columns}
                        setter={fieldsConfiguratorData.setColumn}
                    />
                )}
            </div>
        </div>
    );
};
