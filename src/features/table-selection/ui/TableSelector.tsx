import { Checkbox } from "@/shared/ui";

interface TableSelectorProps {
    checked: boolean;
    indeterminate?: boolean;
    onChange: () => void;
    className?: string;
}

export function TableSelector({
    checked,
    indeterminate,
    onChange,
    className
}: TableSelectorProps) {
    return (
        <div className={className}>
            <Checkbox
                checked={checked}
                indeterminate={indeterminate}
                onChange={onChange}
            />
        </div>
    );
}
