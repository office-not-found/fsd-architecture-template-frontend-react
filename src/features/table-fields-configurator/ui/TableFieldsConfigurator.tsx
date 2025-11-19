import { Menu } from "@mantine/core";
import { Settings } from "lucide-react";
import type { TableColumn } from "@/shared/model";
import { Button } from "@/shared/ui";
import { Checkbox } from "@/shared/ui";
import { useTableFieldsConfigurator } from "../lib";
import styles from "./tableFieldsConfigurator.module.scss";

interface TableFieldsConfiguratorProps<T> {
    columns: TableColumn<T>[];
    setter: (columns: TableColumn<T>[]) => void;
}

export function TableFieldsConfigurator<T>({
    columns,
    setter,
}: TableFieldsConfiguratorProps<T>) {
    const {
        opened,
        setOpened,
        allowedToChangeColumns,
        handleCheckboxChange,
        setDropdown,
        setTrigger,
    } = useTableFieldsConfigurator({ columns, setter });

    return (
        <Menu
            opened={opened}
            styles={{
                dropdown: {
                    background: "var(--mantine-color-backgroundBasic-0)",
                },
            }}
        >
            <Menu.Target ref={setTrigger}>
                <Button
                    variant="outline"
                    size="compact-ld"
                    onClick={() => setOpened((prev) => !prev)}
                    className={styles.settingBtn}
                >
                    <Settings size="20px" />
                </Button>
            </Menu.Target>
            <Menu.Dropdown>
                <div
                    ref={setDropdown}
                    onClick={(e) => e.stopPropagation()}
                    className={styles["dropdown-menu"]}
                >
                    <p>Displayed fields</p>
                    <div>
                        {allowedToChangeColumns.map((column) => {
                            const { label, isVisible } = column;
                            return (
                                <div key={label} className={styles["dropdown-menu__row"]}>
                                    <Checkbox
                                        checked={isVisible}
                                        onChange={() =>
                                            handleCheckboxChange(label, isVisible)
                                        }
                                    />
                                    <div>{label}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Menu.Dropdown>
        </Menu>
    );
}
