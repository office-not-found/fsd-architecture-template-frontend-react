import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import { Navbar } from "@/widgets/navbar";
import { GoBack } from "@/features/go-back";
import { ROUTES } from "@/shared/config/routes";
import { countOccurrencesForString } from "@/shared/lib";
import styles from "./layout.module.scss";

export const Layout = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.pathname === ROUTES.INDEX) navigate(ROUTES.USERS, { replace: true });
    }, [location.pathname]);

    const hideGoBack = countOccurrencesForString(location.pathname, "/") === 1;

    return (
        <div className={styles.layout}>
            <Navbar />
            <div className={styles.layout__content}>
                {!hideGoBack && (
                    <div>
                        <GoBack />
                    </div>
                )}
                <div className={styles.layout__content_outlet}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};
