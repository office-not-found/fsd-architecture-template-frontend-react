import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

export const loginSchema = z.object({
    username: z.string().min(1, "Username is required"),
    password: z.string().min(1, "Password is required"),
});

export const loginResolver = zodResolver(loginSchema);

export type TLoginData = z.infer<typeof loginSchema>;
