import { create } from "zustand";
import type { AccountState } from "./types";

interface AccountActions {
    setAccount: (account: Partial<AccountState>) => void;
    clearAccount: () => void;
}

interface AccountStore extends AccountState, AccountActions {}

const initialState: AccountState = {
    roleName: [],
    options: {
        roleName: []
    },
    isAuth: false,
    userData: {
        createdAt: "",
        id: 0,
        isBlocked: false,
        password: "",
        roleName: null,
        updatedAt: "",
        username: ""
    }
};

export const useAccountStore = create<AccountStore>((set) => ({
    ...initialState,
    setAccount: (account) => set(() => ({ ...account })),
    clearAccount: () => set(() => initialState)
}));
