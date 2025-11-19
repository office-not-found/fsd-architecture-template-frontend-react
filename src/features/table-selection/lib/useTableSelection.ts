import { useState, useCallback, useMemo } from "react";

interface UseTableSelectionProps<T extends { id: number }> {
    data: T[];
    actionWithSelected?: (selected: number[]) => Promise<void> | void;
}

export function useTableSelection<T extends { id: number }>({
    data,
    actionWithSelected,
}: UseTableSelectionProps<T>) {
    const [selectedIds, setSelectedIds] = useState(new Set<number>());

    const handleActionWithSelected = useCallback(async () => {
        if (actionWithSelected) {
            await actionWithSelected(Array.from(selectedIds));
        }
    }, [actionWithSelected, selectedIds]);

    const toggleSelection = useCallback((id: number) => {
        setSelectedIds((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            return newSet;
        });
    }, []);

    const isSelected = useCallback((id: number) => selectedIds.has(id), [selectedIds]);

    const selectAll = useCallback(() => {
        setSelectedIds(new Set(data.map((item) => item.id)));
    }, [data]);

    const deselectAll = useCallback(() => {
        setSelectedIds(new Set());
    }, []);

    const allChecked = useMemo(
        () => data.length > 0 && data.every((item) => isSelected(item.id)),
        [data, isSelected],
    );

    const hasChecked = selectedIds.size > 0;
    const indeterminate = hasChecked && !allChecked;

    return {
        selectedIds,
        handlers: {
            toggleSelection,
            selectAll,
            deselectAll,
            isSelected,
        },
        allChecked,
        hasChecked,
        indeterminate,
        handleActionWithSelected,
    };
}
