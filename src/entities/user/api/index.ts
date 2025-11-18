import { instanceApi } from "@/shared/api";
import type { PartialURLParams } from "@/shared/model";
import type {
    IUserCreateParams,
    IUserUpdateParams,
    IUserResultResponse,
    IUsersResponse,
    IUserBaseItem,
    IUserDetailedItem
} from "../model";

export const fetchUsers = async (params?: PartialURLParams) => {
    const response = await instanceApi.get<IUsersResponse>("/admin/users", {
        params
    });

    return response.data;
};

export const fetchUserById = async (id: number | string) => {
    const response = await instanceApi.get<IUserDetailedItem>(`/admin/user/${id}`);

    return response.data;
};

export const createUser = async (data: IUserCreateParams) => {
    const response = await instanceApi.post<IUserResultResponse>("/admin/user", data);

    return response.data;
};

export const updateUser = async ({
    userId,
    body
}: {
    userId: number | string;
    body: IUserUpdateParams;
}) => {
    const response = await instanceApi.patch<IUserBaseItem>(
        `/admin/user/${userId}`,
        body
    );

    return response.data;
};

export const deleteUser = async (ids: number[]) => {
    const response = await instanceApi.delete<IUserBaseItem>(`/admin/user`, {
        data: { userIds: ids }
    });

    return response.data;
};
