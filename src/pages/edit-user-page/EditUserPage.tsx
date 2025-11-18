import { useParams } from "react-router";
import { EditUserForm } from "@/features/edit-user-form";
import { useGetUserByIDQuery } from "@/entities/user";
import { InformationCard } from "@/shared/ui";
import styles from "./editUserPage.module.scss";

export const EditUserPage = () => {
    const { id } = useParams();
    const { data } = useGetUserByIDQuery(id!);

    return (
        <div className={styles["edit-user-page"]}>
            <h1 className={styles["edit-user-page__title"]}>Edit User Page</h1>
            <div className={styles["edit-user-page__content"]}>
                <div className={styles["edit-user-page__content_left"]}>
                    <EditUserForm userData={data} />
                </div>
                <InformationCard
                    createdAt={data?.createdAt}
                    updatedAt={data?.updatedAt}
                />
            </div>
        </div>
    );
};
