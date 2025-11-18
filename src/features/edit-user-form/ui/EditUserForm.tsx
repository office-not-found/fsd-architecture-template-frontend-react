import { Controller } from "react-hook-form";
import type { IUserDetailedItem } from "@/entities/user";
import { TextInput, PasswordInput, Switch, Select, Button } from "@/shared/ui";
import { useEditUserForm } from "../lib";
import styles from "./editUserForm.module.scss";

interface IEditUserFormProps {
    userData: IUserDetailedItem | undefined;
}

export const EditUserForm = ({ userData }: IEditUserFormProps) => {
    const {
        onSubmit,
        register,
        errors,
        control,
        isUpdateUserPending,
        disabledChangeRoleForAdmin,
        roleOptions
    } = useEditUserForm(userData);

    return (
        <form onSubmit={onSubmit}>
            <TextInput label="User ID" {...register("id")} withAsterisk disabled />
            <TextInput
                {...register("username")}
                label="Username"
                placeholder="Enter username"
                error={errors.username?.message}
                autoComplete="new-username"
                withAsterisk
                disabled={isUpdateUserPending}
            />
            <PasswordInput
                {...register("password")}
                label="New password"
                placeholder="Enter new password"
                error={errors.password?.message}
                autoComplete="new-password"
                disabled={isUpdateUserPending}
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
                        disabled={isUpdateUserPending || disabledChangeRoleForAdmin}
                    />
                )}
            />
            <div className={styles[`switch-container`]}>
                <Controller
                    name="isBlocked"
                    control={control}
                    render={({ field }) => (
                        <Switch
                            label="Is Blocked"
                            checked={!!field.value}
                            onChange={(event) =>
                                field.onChange(event.currentTarget.checked)
                            }
                            error={errors.isBlocked?.message}
                            disabled={isUpdateUserPending}
                        />
                    )}
                />
            </div>
            <Button
                className={styles[`submit-button`]}
                type="submit"
                loading={isUpdateUserPending}
            >
                Save
            </Button>
        </form>
    );
};
