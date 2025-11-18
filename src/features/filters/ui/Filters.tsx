import { Menu } from "@mantine/core";
import { ListFilter } from "lucide-react";
import { Button } from "@/shared/ui";
import { useFilters } from "../lib";
import type { Filter } from "../model";
import { FilterItem } from "./FilterItem";
import styles from "./filters.module.scss";

interface FiltersProps {
    filters: Filter[];
}

export const Filters = ({ filters }: FiltersProps) => {
    const {
        opened,
        setOpened,
        setTrigger,
        setDropdown,
        draft,
        updateDraft,
        setSelectOpen,
        disabledClearAllButton,
        applyFilters,
        handleClearAll
    } = useFilters({ filters });

    return (
        <Menu opened={opened}>
            <Menu.Target ref={setTrigger}>
                <Button
                    variant="outline"
                    onClick={() => setOpened((prev) => !prev)}
                    leftSection={<ListFilter />}
                    className={styles["filters__trigger"]}
                >
                    Filters
                </Button>
            </Menu.Target>
            <Menu.Dropdown ref={setDropdown} className={styles["filters__dropdown"]}>
                <div
                    onClick={(e) => e.stopPropagation()}
                    className={styles["filters__items"]}
                >
                    {filters.map((filter) => (
                        <FilterItem
                            key={filter?.paramsKey}
                            filter={filter}
                            value={draft[filter?.paramsKey]}
                            onChange={(value) => updateDraft(filter?.paramsKey, value)}
                            onDropdownOpen={() => setSelectOpen(true)}
                            onDropdownClose={() => setSelectOpen(false)}
                        />
                    ))}
                </div>
                <div className={styles["filters__apply"]}>
                    <Button
                        variant="outline"
                        color="danger"
                        fullWidth
                        onClick={handleClearAll}
                        disabled={disabledClearAllButton}
                    >
                        Clear all
                    </Button>
                    <Button fullWidth onClick={applyFilters}>
                        Apply
                    </Button>
                </div>
            </Menu.Dropdown>
        </Menu>
    );
};
