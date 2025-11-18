import { instanceApi } from "@/shared/api";
import type { Account } from "../model";

export const fetchAccountGetMe = () => instanceApi.get<Account>("/admin/get-me");
