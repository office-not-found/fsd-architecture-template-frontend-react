import type { z } from "zod";
import type { GetTypeOfValuesFromEnum, IMeta } from "@/shared/model/types";
import type { addUserSchema, editUserSchema } from "./schema";

export enum EUserRoleName {
    CLIENT = "client",
    ADMIN = "admin",
}

export type TUserRoleNames = GetTypeOfValuesFromEnum<EUserRoleName>;

export interface IUserBaseItem {
    id: number;
    username: string;
    password: string;
    isBlocked: boolean;
    createdAt: string;
    updatedAt: string;
    roleName: TUserRoleNames;
}

export interface IUserDetailedItem extends IUserBaseItem {
    // * Add additional user entry fields
}

export interface IUsersResponse {
    users: IUserDetailedItem[];
    meta: IMeta;
}

export interface IUserResultResponse {
    success: boolean;
    user: IUserBaseItem;
}

export type TAddUserForm = z.infer<typeof addUserSchema>;
export type TEditUserForm = z.infer<typeof editUserSchema>;

export interface IUserCreateParams {
    username: string;
    password: string;
    roleName: string | null;
}

export interface IUserUpdateParams {
    username?: string;
    password?: string;
    isBlocked?: boolean;
    roleName?: string | null;
}
