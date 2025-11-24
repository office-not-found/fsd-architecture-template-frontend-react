import { createTheme, defaultVariantColorsResolver } from "@mantine/core";
import { colors } from "./colors";
import "./index.scss";

export const theme = createTheme({
    fontFamily: "Formular, sans-serif",
    defaultRadius: "md",
    primaryColor: "accent",
    colors,
    variantColorResolver: (input) => {
        const defaultResolvedColors = defaultVariantColorsResolver(input);

        if (input.variant === "filled") {
            return {
                ...defaultResolvedColors,
                color: colors.backgroundBasic[0],
            };
        }

        return defaultResolvedColors;
    },
});
