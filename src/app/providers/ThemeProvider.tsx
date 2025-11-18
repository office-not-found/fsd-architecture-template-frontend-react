import { MantineProvider } from "@mantine/core";
import type { PropsWithChildren } from "react";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import { theme } from "@/shared/config/theme";

export const ThemeProvider = ({ children }: PropsWithChildren) => (
    <MantineProvider defaultColorScheme="dark" theme={theme}>
        {children}
    </MantineProvider>
);
