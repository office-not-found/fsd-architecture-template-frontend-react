import { useEffect } from "react";
import { useSearchParamsObject } from "@/shared/lib";

interface UsePaginationArgs {
    total?: number;
}

export const usePagination = ({ total }: UsePaginationArgs) => {
    const { params, setSearchParamsObject } = useSearchParamsObject(["page"]);

    const page = Number(params.page);

    useEffect(() => {
        if (!page || page < 1) {
            setSearchParamsObject({
                page: "1",
            });
        }

        if (total && page > total) {
            setSearchParamsObject({
                page: total.toString(),
            });
        }
    }, [page, total]);

    const handleChangePage = (newPage: number) => {
        setSearchParamsObject({
            page: newPage.toString(),
        });
    };

    return { page, handleChangePage };
};
