import { useState } from "react";
import { useLocation } from "react-router";
import { LogoutButton } from "@/features/logout-button";
import { AccountAvatar } from "@/entities/account";
import { ROUTES } from "@/shared/config/routes";
import { NavLink } from "@/shared/ui";
import styles from "./navbar.module.scss";

export const Navbar = () => {
    const location = useLocation();
    const [opened, setOpened] = useState(true);

    return (
        <div className={styles.navbar}>
            <p className={styles.navbar__title}>Content</p>
            <div className={styles.navbar__menu}>
                <NavLink
                    label="Collection types"
                    opened={opened}
                    onChange={setOpened}
                    childrenOffset={0}
                >
                    <NavLink
                        label="Users"
                        to={ROUTES.USERS}
                        active={location.pathname.includes(ROUTES.USERS)}
                    />
                </NavLink>
            </div>
            <div className={styles["navbar__footer"]}>
                <div className={styles["navbar__account"]}>
                    <AccountAvatar />
                    <LogoutButton />
                </div>
            </div>
        </div>
    );
};
