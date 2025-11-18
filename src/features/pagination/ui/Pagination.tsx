import { PaginationUi } from "@/shared/ui";
import { usePagination } from "../lib";

interface PaginationProps {
    total?: number;
}

export const Pagination = ({ total }: PaginationProps) => {
    const { page, handleChangePage } = usePagination({ total });

    return total && total > 1 ? (
        <PaginationUi total={total} value={page} onChange={handleChangePage} />
    ) : null;
};
