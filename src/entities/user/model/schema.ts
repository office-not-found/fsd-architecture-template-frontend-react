import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

export const addUserSchema = z.object({
    username: z
        .string()
        .trim()
        .min(1, "Username is required")
        .min(3, "Username must be at least 3 characters long")
        .regex(
            /^[a-zA-Z0-9_-]+$/,
            "Username can only contain letters, numbers and underscores or hyphens",
        )
        .refine(
            (val) =>
                !val.startsWith("_") &&
                !val.endsWith("_") &&
                !val.startsWith("-") &&
                !val.endsWith("-"),
            {
                message: "Username cannot start or end with underscore or hyphen",
            },
        ),
    password: z.string().trim().min(1, "Password is required"),
    roleName: z.union([
        z.string().trim().min(1, "Role is required"),
        z.null().refine(() => false, { message: "Role is required" }),
    ]),
});

export const addUserResolver = zodResolver(addUserSchema);

export const editUserSchema = z.object({
    id: z.number(),
    username: z
        .string()
        .trim()
        .min(1, "Username is required")
        .min(3, "Username must be at least 3 characters long")
        .regex(
            /^[a-zA-Z0-9_-]+$/,
            "Username can only contain letters, numbers and underscores or hyphens",
        )
        .refine(
            (val) =>
                !val.startsWith("_") &&
                !val.endsWith("_") &&
                !val.startsWith("-") &&
                !val.endsWith("-"),
            {
                message: "Username cannot start or end with underscore or hyphen",
            },
        )
        .optional(),
    password: z.string().trim().optional(),
    isBlocked: z.boolean().optional(),
    roleName: z
        .union([
            z.string().trim().min(1, "Role is required"),
            z.null().refine(() => false, { message: "Role is required" }),
        ])
        .optional(),
});

export const editUserResolver = zodResolver(editUserSchema);
