import { colorsTuple, DEFAULT_THEME, type MantineThemeColors } from "@mantine/core";

export const colors: MantineThemeColors = {
    ...DEFAULT_THEME.colors,
    accent: colorsTuple("#98fb98"),
    backgroundBasic: colorsTuple("#39374c"),
    backgroundStroke: colorsTuple("#4a485e"),
    backgroundDark: colorsTuple("#302f3d"),
    backgroundHover: colorsTuple("#5a586e"),
    gray: colorsTuple("#a0a0a0"),
    grayLight: colorsTuple("#e0e0e0"),
    danger: colorsTuple("#ff5e5e"),
    white: colorsTuple("#ffffff")
};
