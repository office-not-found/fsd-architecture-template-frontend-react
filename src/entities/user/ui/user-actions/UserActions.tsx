import { EditIcon, Trash2 } from "lucide-react";
import { Link } from "react-router";
import type { IUserDetailedItem } from "@/entities/user";
import { ROUTES } from "@/shared/config/routes";
import { Button, DeleteActionButton } from "@/shared/ui";
import styles from "./userActions.module.scss";

interface UserActionsProps {
    user: IUserDetailedItem;
    onDelete: () => Promise<unknown>;
}

export const UserActions = ({ user, onDelete }: UserActionsProps) => {
    return (
        <div className={styles["user-actions"]}>
            <Button
                variant="outline"
                className={styles["user-actions__edit"]}
                component={Link}
                to={ROUTES.EDIT_USER.replace(":id", String(user.id))}
            >
                <EditIcon size={16} />
            </Button>
            <DeleteActionButton
                onDelete={onDelete}
                buttonClassName={styles["user-actions__remove"]}
            >
                <Trash2 size={16} />
            </DeleteActionButton>
        </div>
    );
};
