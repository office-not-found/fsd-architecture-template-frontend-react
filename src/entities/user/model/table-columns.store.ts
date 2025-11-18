import { create } from "zustand";
import type { TableColumn } from "@/shared/model";
import { userColumns } from "./columns";
import type { IUserDetailedItem } from "./types";

interface UsersColumnsStore {
    columns: TableColumn<IUserDetailedItem>[];
    setColumn: (columns: TableColumn<IUserDetailedItem>[]) => void;
}

export const useUsersColumnsStore = create<UsersColumnsStore>((set) => ({
    columns: userColumns,
    setColumn: (columns) => set({ columns })
}));
