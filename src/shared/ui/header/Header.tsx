import type React from "react";
import styles from "./header.module.scss";

interface HeaderProps {
    title: string;
    subtitle: string;
    children?: React.ReactNode;
}

export const Header = ({ title, subtitle, children }: HeaderProps) => (
    <div className={styles.header__container}>
        <div>
            <h1 className={styles.header__title}>{title}</h1>
            <p className={styles.header__subtitle}>{subtitle}</p>
        </div>
        {children}
    </div>
);
