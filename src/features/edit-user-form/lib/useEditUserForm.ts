import type { ComboboxItem } from "@mantine/core";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAccountStore } from "@/entities/account";
import {
    useUpdateUserMutation,
    editUserResolver,
    EUserRoleName,
    type TEditUserForm,
    type IUserBaseItem,
    type IUserDetailedItem,
    type IUserUpdateParams,
} from "@/entities/user";
import { ROUTES } from "@/shared/config/routes";
import { customShowNotification, useHistoryNavigation } from "@/shared/lib";

export const useEditUserForm = (userData: IUserDetailedItem | undefined) => {
    const navigate = useHistoryNavigation(ROUTES.USERS);

    const initialValues = {
        id: userData?.id,
        username: userData?.username,
        roleName: userData?.roleName,
        isBlocked: userData?.isBlocked,
    };

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset,
        control,
        setValue,
    } = useForm<TEditUserForm>({
        resolver: editUserResolver,
        mode: "onChange",
        defaultValues: initialValues,
    });

    const { mutateAsync: updateUser, isPending: isUpdateUserPending } =
        useUpdateUserMutation();

    const { roleName: roleOptions } = useAccountStore((store) => store.options);

    const onSuccess = (data: IUserBaseItem) => {
        setValue("password", undefined);

        customShowNotification({
            id: `edit-user-form-${data.id}`,
            title: "User updated",
            message: `User "${data?.username}" updated successfully`,
            color: "green",
        });

        navigate();
    };

    const roleName = watch("roleName");
    const disabledChangeRoleForAdmin = roleName === EUserRoleName.ADMIN;

    // This is done so that it is impossible to change the role
    // to the admin of a user who originally had a different role. (cringe)
    const filteredRoleOptions =
        roleName !== EUserRoleName.ADMIN
            ? roleOptions.filter(
                  (role) => (role as ComboboxItem).value !== EUserRoleName.ADMIN,
              )
            : roleOptions;

    const onSubmit = handleSubmit(async (data) => {
        const body: IUserUpdateParams = {};

        // Проверяем изменения в основных полях
        if (data.username !== userData?.username) body.username = data.username;

        if (data.password) body.password = data.password;

        if (data.isBlocked !== userData?.isBlocked) body.isBlocked = data.isBlocked;

        if (data.roleName !== userData?.roleName) {
            body.roleName = data.roleName;
        }

        // Проверяем, есть ли данные для отправки
        if (Object.keys(body).length === 0) {
            customShowNotification({
                id: `edit-user-form-${data.id}`,
                title: "No changes",
                message: "No changes to save user",
                color: "blue",
            });
            return;
        }

        await updateUser({ userId: data.id, body }, { onSuccess });
    });

    useEffect(() => {
        if (initialValues) reset(initialValues);
    }, [userData, reset]);

    return {
        register,
        onSubmit,
        errors,
        isUpdateUserPending,
        control,
        reset,
        disabledChangeRoleForAdmin,
        roleOptions: filteredRoleOptions,
    };
};
