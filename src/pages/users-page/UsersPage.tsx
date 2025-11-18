import { TableWithActions } from "@/widgets/table-with-actions";
import { AddUserModal } from "@/features/add-user";
import type { Filter } from "@/features/filters";
import {
    useGetAllUsersQuery,
    useUsersColumnsStore,
    UserActions,
    UserTableRow,
    useDeleteUserMutation,
    useGetFilters
} from "@/entities/user";
import { Header } from "@/shared/ui";
import styles from "./usersPage.module.scss";

export const UsersPage = () => {
    const { data, isFetching } = useGetAllUsersQuery();
    const { mutateAsync: deleteUser } = useDeleteUserMutation();

    const { columns, setColumn } = useUsersColumnsStore();

    const userFilters = useGetFilters();

    return (
        <div className={styles["users-page"]}>
            <Header title="Users" subtitle="List of users">
                <AddUserModal />
            </Header>
            <TableWithActions
                columns={columns.filter((clm) => clm.isVisible) ?? []}
                data={data?.users ?? []}
                filters={userFilters as Filter[]}
                loading={isFetching}
                fieldsConfiguratorData={{ setColumn, columns }}
                onMultipleDelete={deleteUser}
                paginationData={{
                    currentPage: data?.meta?.currentPage,
                    totalPages: data?.meta?.totalPages
                }}
                renderBodyRow={(row, columns, isChecked, toggleSelection, index) => (
                    <UserTableRow
                        key={row.id}
                        data={row}
                        columns={columns}
                        index={20 * (data?.meta?.currentPage! - 1) + index + 1}
                        isChecked={isChecked}
                        onToggle={() => toggleSelection(row.id)}
                        renderActions={(user) => (
                            <UserActions
                                onDelete={() => deleteUser([user.id])}
                                user={user}
                            />
                        )}
                    />
                )}
                noDataText="No users found"
            />
        </div>
    );
};
