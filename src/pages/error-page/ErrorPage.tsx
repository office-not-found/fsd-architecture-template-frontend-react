import { Link, useRouteError } from "react-router";
import { ROUTES } from "@/shared/config/routes";
import { Button } from "@/shared/ui";
import styles from "./errorPage.module.scss";

export const ErrorPage = () => {
    const routeError = useRouteError();
    const errorMessage = routeError;

    return (
        <div className={styles["error-page"]}>
            <div className={styles["error-page__container"]}>
                <h1 className={styles["error-page__title"]}>Something went wrong</h1>
                <p className={styles["error-page__text"]}>{String(errorMessage)}</p>
                <Button
                    component={Link}
                    to={ROUTES.USERS}
                    className={styles["error-page__button"]}
                >
                    Home
                </Button>
            </div>
        </div>
    );
};
