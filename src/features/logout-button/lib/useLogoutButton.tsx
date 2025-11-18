import { useNavigate } from "react-router";
import { useLogoutQuery } from "@/entities/auth";
import { ROUTES } from "@/shared/config/routes";

export const useLogoutButton = () => {
    const navigate = useNavigate();

    const { refetch: logout, isLoading } = useLogoutQuery({
        enabled: false
    });

    const onClick = async () => {
        await logout();
        navigate(ROUTES.LOGIN);
    };

    return {
        onClick,
        isLoading
    };
};
