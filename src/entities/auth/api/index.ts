import { instanceApi } from "@/shared/api";
import type { TLoginData } from "../model";

export const fetchLogin = (data: TLoginData) =>
    instanceApi.post("/auth/login/admin", data);

export const fetchLogout = () => instanceApi.get<void>("/auth/logoutAdmin");
