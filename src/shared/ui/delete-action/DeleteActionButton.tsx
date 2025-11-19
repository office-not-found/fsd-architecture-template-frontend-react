import { useDisclosure } from "@mantine/hooks";
import { Trash2 } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "../button";
import { ModalConfirm } from "../modal-confirm";
import styles from "./deleteActionButton.module.scss";

interface DeleteActionButtonProps {
    onDelete: () => Promise<unknown>;
    buttonClassName?: string;
    children?: ReactNode;
    isMultiple?: boolean;
}

export function DeleteActionButton({
    onDelete,
    buttonClassName,
    children,
    isMultiple = false,
}: DeleteActionButtonProps) {
    const [opened, { close, open }] = useDisclosure(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleDelete = async () => {
        try {
            setIsLoading(true);
            await onDelete();
            close();
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <ModalConfirm
            opened={opened}
            onClose={close}
            message={
                isMultiple
                    ? "Are you sure you want to delete these entries?"
                    : "Are you sure you want to delete this entry?"
            }
            renderLeftTrigger={() => (
                <Button variant="outline" onClick={close}>
                    Cancel
                </Button>
            )}
            renderRightTrigger={() => (
                <Button
                    classNames={{
                        label: styles["delete-action-button-label"],
                    }}
                    variant="outline"
                    color="red"
                    onClick={handleDelete}
                    loading={isLoading}
                >
                    <Trash2 size={16} />
                    Confirm
                </Button>
            )}
            renderTrigger={() => (
                <Button
                    className={buttonClassName}
                    color="red"
                    variant="outline"
                    onClick={() => open()}
                >
                    {children}
                </Button>
            )}
        />
    );
}
