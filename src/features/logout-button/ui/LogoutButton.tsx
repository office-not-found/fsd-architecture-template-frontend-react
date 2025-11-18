import { LogOut } from "lucide-react";
import { Button } from "@/shared/ui";
import { useLogoutButton } from "../lib";
import styles from "./logout.module.scss";

export const LogoutButton = () => {
    const { onClick, isLoading } = useLogoutButton();

    return (
        <Button
            className={styles["logout-button"]}
            onClick={onClick}
            variant="transparent"
            loading={isLoading}
        >
            <LogOut />
        </Button>
    );
};
