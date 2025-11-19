import { useForm, type DefaultValues } from "react-hook-form";
import type { TAddUserForm, IUserResultResponse } from "@/entities/user";
import { addUserResolver, useCreateUserMutation } from "@/entities/user";
import { customShowNotification } from "@/shared/lib/customNotifications";

const defaultValues: DefaultValues<TAddUserForm> = {
    username: "",
    password: "",
    roleName: "",
};

interface IUseAddUserFormProps {
    closeModal: () => void;
}

export const useAddUserForm = ({ closeModal }: IUseAddUserFormProps) => {
    const {
        handleSubmit,
        register,
        formState: { errors },
        reset,
        control,
    } = useForm<TAddUserForm>({
        resolver: addUserResolver,
        mode: "onChange",
        defaultValues,
    });

    const { mutateAsync: createUser, isPending: isCreateUserPending } =
        useCreateUserMutation();

    const onSuccess = (data: IUserResultResponse) => {
        const newUsername = data?.user?.username;
        customShowNotification({
            id: `add-user-form-${newUsername}`,
            title: "User created",
            message: `User "${newUsername}" created successfully`,
            color: "green",
        });

        closeModal();
        reset();
    };

    const onSubmit = handleSubmit(async (data) => {
        const body = {
            username: data.username.trim(),
            password: data.password.trim(),
            roleName: data.roleName,
        };

        await createUser(body, { onSuccess });
    });

    return {
        errors,
        register,
        onSubmit,
        control,
        isCreateUserPending,
    };
};
