import { ArrowLeft } from "lucide-react";
import { useHistoryNavigation } from "@/shared/lib";
import { Button } from "@/shared/ui";
import styles from "./goBack.module.scss";

export const GoBack = () => {
    const goBack = useHistoryNavigation();

    return (
        <Button className={styles.goBack} variant="transparent" onClick={goBack}>
            <ArrowLeft />
            Back
        </Button>
    );
};
