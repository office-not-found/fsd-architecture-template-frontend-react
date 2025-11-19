import type { ReactNode } from "react";
import { DeleteActionButton } from "@/shared/ui";

interface TableSelectionToolbarProps {
    hasChecked: boolean;
    onDelete: () => Promise<void>;
    children?: ReactNode;
}

export function TableSelectionToolbar({
    hasChecked,
    onDelete,
    children,
}: TableSelectionToolbarProps) {
    if (!hasChecked) return null;

    return (
        <div>
            {children}
            <DeleteActionButton onDelete={onDelete} isMultiple>
                Delete
            </DeleteActionButton>
        </div>
    );
}
