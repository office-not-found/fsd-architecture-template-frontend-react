import { useEffect, type PropsWithChildren } from "react";
import { useLocation, useNavigate } from "react-router";
import { useAccountStore } from "@/entities/account";
import { useGetCurrentAccountQuery } from "@/entities/account";
import { ROUTES } from "@/shared/config/routes";
import { LoaderOverlay } from "@/shared/ui";

export const CheckAuthProvider = ({ children }: PropsWithChildren) => {
    const navigate = useNavigate();
    const location = useLocation();

    const { isLoading, isSuccess, isError } = useGetCurrentAccountQuery();

    const setAccount = useAccountStore((state) => state.setAccount);

    useEffect(() => {
        if (isSuccess) {
            setAccount({ isAuth: true });
            if (location.pathname === ROUTES.LOGIN) {
                navigate(ROUTES.USERS, { replace: true });
            }
        }
    }, [isSuccess]);

    useEffect(() => {
        if (isError) navigate(ROUTES.LOGIN, { replace: true });
    }, [isError]);

    if (isLoading) return <LoaderOverlay visible={isLoading} />;

    return <>{children}</>;
};
