import type { ComboboxData } from "@mantine/core";
import type { TUserRoleNames } from "@/entities/user";
import type { IUserBaseItem } from "@/entities/user";

export interface RoleNameResponse {
    name: TUserRoleNames;
}

export interface IAccountUserData extends Omit<IUserBaseItem, "roleName"> {
    roleName: TUserRoleNames | null;
}

export interface Account {
    userData: IAccountUserData;
    roleName: RoleNameResponse[];
}

export interface AccountState extends Account {
    isAuth: boolean;
    options: {
        roleName: ComboboxData;
    };
}
