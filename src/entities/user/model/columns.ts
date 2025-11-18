import type { TableColumn } from "@/shared/model";
import type { IUserDetailedItem } from "./types";

export const userColumns: TableColumn<IUserDetailedItem>[] = [
    { type: "raw", key: "selector", label: "", isVisible: true },
    { type: "raw", key: "№", label: "№", isVisible: true },
    {
        type: "entry",
        label: "ID",
        keyInEntry: "id",
        sortKey: "id",
        isVisible: true
    },
    { type: "entry", label: "Username", keyInEntry: "username", isVisible: true },
    { type: "entry", label: "Role", keyInEntry: "roleName", isVisible: true },
    {
        type: "entry",
        keyInEntry: "isBlocked",
        label: "Is blocked",
        isVisible: true
    },
    {
        type: "entry",
        label: "Last update",
        sortKey: "updatedAt",
        keyInEntry: "updatedAt",
        isVisible: true
    },
    {
        type: "entry",
        label: "Created",
        sortKey: "createdAt",
        keyInEntry: "createdAt",
        isVisible: true
    },
    { type: "raw", key: "actions", label: "Actions", isVisible: true }
];
