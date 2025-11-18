import { Tooltip } from "@/shared/ui";
import { useAccountStore } from "../../model";
import styles from "./accountAvatar.module.scss";

export const AccountAvatar = () => {
    const username = useAccountStore((state) => state.userData.username);

    return (
        <div className={styles["account-avatar"]}>
            <div className={styles["account-avatar__icon"]}>
                {username.charAt(0).toUpperCase()}
            </div>
            <Tooltip label={username}>
                <p className={styles["account-avatar__name"]}>{username}</p>
            </Tooltip>
        </div>
    );
};
