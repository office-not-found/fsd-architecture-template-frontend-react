import { useLocation, useNavigate } from "react-router";
import { ROUTES } from "../config/routes";

export const useHistoryNavigation = (homePage: string = ROUTES.USERS) => {
    const location = useLocation();
    const navigate = useNavigate();
    const thereIsAPrevPage = location.key !== "default";

    if (thereIsAPrevPage) {
        return () => navigate(-1);
    }

    return () => navigate(homePage);
};
