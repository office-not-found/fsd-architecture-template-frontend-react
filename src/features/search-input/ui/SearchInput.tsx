import { SearchInputUi } from "@/shared/ui";
import { useSearchInput } from "../lib";
import styles from "./searchInput.module.scss";

export const SearchInput = () => {
    const { searchValue, handleSearchChange, handleClearSearch } = useSearchInput();

    return (
        <SearchInputUi
            className={styles["search-input"]}
            value={searchValue || ""}
            onChange={handleSearchChange}
            onClickClear={handleClearSearch}
        />
    );
};
