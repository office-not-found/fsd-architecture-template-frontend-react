import { useClickOutside } from "@mantine/hooks";
import { useState } from "react";
import type { TableColumn } from "@/shared/model";

interface useTableFieldsConfiguratorParams<T> {
    columns: TableColumn<T>[];
    setter: (columns: TableColumn<T>[]) => void;
}

export const useTableFieldsConfigurator = <T>({
    columns,
    setter,
}: useTableFieldsConfiguratorParams<T>) => {
    const [opened, setOpened] = useState(false);

    const allowedToChangeColumns = columns?.filter(
        (clm) => clm.label && clm.label !== "№",
    );

    const [dropdown, setDropdown] = useState<HTMLDivElement | null>(null);
    const [trigger, setTrigger] = useState<HTMLElement | null>(null);
    const [selectOpen] = useState(false);

    useClickOutside(
        () => {
            if (!selectOpen) {
                setOpened(false);
            }
        },
        null,
        [dropdown, trigger],
    );

    const handleCheckboxChange = (label: string, oldIsVisible: boolean) => {
        const newColumns = columns?.map((clm) =>
            clm.label === label ? { ...clm, isVisible: !oldIsVisible } : clm,
        );

        setter(newColumns);
    };

    return {
        opened,
        setOpened,
        allowedToChangeColumns,
        handleCheckboxChange,
        setDropdown,
        setTrigger,
    };
};
