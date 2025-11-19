import { Controller } from "react-hook-form";
import { useAccountStore } from "@/entities/account";
import { Button, TextInput, PasswordInput, Select } from "@/shared/ui";
import { useAddUserForm } from "../lib";
import styles from "./addUserModalContent.module.scss";

interface IAddUserModalContentProps {
    closeModal: () => void;
}

export const AddUserModalContent = ({ closeModal }: IAddUserModalContentProps) => {
    const { onSubmit, register, errors, control, isCreateUserPending } = useAddUserForm({
        closeModal,
    });

    const { roleName: roleOptions } = useAccountStore((store) => store.options);

    return (
        <form onSubmit={onSubmit} className={styles["add-new-user-modal-content"]}>
            <div className={styles["add-new-user-modal-content__content"]}>
                <TextInput
                    {...register("username")}
                    label="Username"
                    placeholder="Enter username"
                    error={errors.username?.message}
                    autoComplete="new-username"
                    withAsterisk
                    disabled={isCreateUserPending}
                />
                <PasswordInput
                    {...register("password")}
                    label="Password"
                    placeholder="Enter password"
                    error={errors.password?.message}
                    autoComplete="new-password"
                    withAsterisk
                    disabled={isCreateUserPending}
                />
                <Controller
                    name="roleName"
                    control={control}
                    render={({ field }) => (
                        <Select
                            label="Role Name"
                            placeholder="Select role"
                            data={roleOptions}
                            value={field.value || null}
                            onChange={field.onChange}
                            error={errors.roleName?.message}
                            withAsterisk
                            disabled={isCreateUserPending}
                        />
                    )}
                />
            </div>
            <Button
                type="submit"
                className={styles["add-new-user-modal-content__submit"]}
                loading={isCreateUserPending}
            >
                Add User
            </Button>
        </form>
    );
};
