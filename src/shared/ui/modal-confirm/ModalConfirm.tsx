import type { ComponentProps, ReactNode } from "react";
import { Button } from "../button";
import { Modal } from "../modal";
import styles from "./modalConfirm.module.scss";

interface ModalConfirmProps extends ComponentProps<typeof Modal> {
    renderTrigger: () => ReactNode;
    isLoadingConfirm?: boolean;
    onConfirm?: (() => void) | (() => Promise<void>);
    renderLeftTrigger?: () => ReactNode;
    renderRightTrigger?: () => ReactNode;
    message?: string;
}

const DEFAULT_QUESTION = "You confirm your action?";

export const ModalConfirm = ({
    message,
    renderTrigger,
    onConfirm,
    isLoadingConfirm,
    onClose,
    renderLeftTrigger,
    renderRightTrigger,
    ...props
}: ModalConfirmProps) => {
    return (
        <>
            <Modal onClose={onClose} {...props}>
                <div className={styles["modal-confirm__content"]}>
                    <p className={styles["modal-confirm__question"]}>
                        {message ?? DEFAULT_QUESTION}
                    </p>
                    <div className={styles["modal-confirm__actions"]}>
                        {renderLeftTrigger?.() ?? (
                            <Button
                                variant="outline"
                                onClick={async () => {
                                    await onConfirm?.();
                                    onClose();
                                }}
                                loading={isLoadingConfirm}
                            >
                                Confirm
                            </Button>
                        )}
                        {renderRightTrigger?.() ?? (
                            <Button variant="outline" color="red" onClick={onClose}>
                                Disprove
                            </Button>
                        )}
                    </div>
                </div>
            </Modal>

            {renderTrigger()}
        </>
    );
};
