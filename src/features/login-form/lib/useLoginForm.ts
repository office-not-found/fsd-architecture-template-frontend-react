import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useAccountStore } from "@/entities/account";
import { loginResolver, type TLoginData } from "@/entities/auth";
import { useLoginQuery } from "@/entities/auth/query";
import { ROUTES } from "@/shared/config/routes";

export const useLoginForm = () => {
    const navigate = useNavigate();

    const setUser = useAccountStore((state) => state.setAccount);

    const { mutate, isPending } = useLoginQuery();

    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm<TLoginData>({
        resolver: loginResolver,
        reValidateMode: "onChange",
        defaultValues: {
            username: "",
            password: ""
        }
    });

    const onSuccess = () => {
        setUser({ isAuth: true });
        navigate(ROUTES.USERS);
    };

    const onSubmit = handleSubmit((data: TLoginData) => {
        mutate(
            {
                username: data.username.trim(),
                password: data.password.trim()
            },
            { onSuccess }
        );
    });

    return {
        errors,
        register,
        onSubmit,
        isPending
    };
};
