import clsx from "clsx";
import { ChevronDown, ChevronUp } from "lucide-react";
import type { URLSortParamsKey } from "@/shared/model";
import { useTableSorting } from "../lib";
import styles from "./sortButtons.module.scss";

interface SortButtonsProps {
    columnKey: URLSortParamsKey;
    label: string;
}

export const SortButtons = ({ columnKey, label }: SortButtonsProps) => {
    const { currentDirection, handleSort } = useTableSorting(columnKey);

    return (
        <div className={styles["sort-buttons"]} onClick={handleSort}>
            {label}
            <span className={styles["sort-buttons__icons"]}>
                <ChevronUp
                    size={12}
                    className={clsx(
                        styles["sort-buttons__icon"],
                        currentDirection === "asc"
                            ? styles["sort-buttons__icon_active"]
                            : styles["sort-buttons__icon_inactive"]
                    )}
                />
                <ChevronDown
                    size={12}
                    className={clsx(
                        styles["sort-buttons__icon"],
                        currentDirection === "desc"
                            ? styles["sort-buttons__icon_active"]
                            : styles["sort-buttons__icon_inactive"]
                    )}
                />
            </span>
        </div>
    );
};
