import { getFullDate } from "@/shared/lib/formatDate";
import styles from "./informationCard.module.scss";

interface InformationCardProps {
    createdAt?: string;
    createdBy?: string;
    updatedAt?: string;
    updatedBy?: string;
}

export const InformationCard = ({
    createdAt,
    updatedAt,
    createdBy,
    updatedBy
}: InformationCardProps) => (
    <div className={styles["information-card"]}>
        <div className={styles["information-card__title"]}>INFORMATION</div>
        <div className={styles["information-card__row-group"]}>
            <div className={styles["information-card__row"]}>
                <span className={styles["information-card__label"]}>Created</span>
                <span className={styles["information-card__value"]}>
                    {getFullDate(createdAt)}
                </span>
            </div>
            {createdBy && (
                <div className={styles["information-card__row"]}>
                    <span className={styles["information-card__label"]}>By</span>
                    <span className={styles["information-card__value"]}>{createdBy}</span>
                </div>
            )}
            <div className={styles["information-card__row"]}>
                <span className={styles["information-card__label"]}>Last update</span>
                <span className={styles["information-card__value"]}>
                    {getFullDate(updatedAt)}
                </span>
            </div>
            {updatedBy && (
                <div className={styles["information-card__row"]}>
                    <span className={styles["information-card__label"]}>By</span>
                    <span className={styles["information-card__value"]}>{updatedBy}</span>
                </div>
            )}
        </div>
    </div>
);
