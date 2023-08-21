export const useGlobalTheme = ({ colorScheme }) => {
    const isDark = colorScheme === "dark";

    /** import('@mantine/core').MantineThemeOverride */
    const globalTheme = {
        colorScheme,
        fontFamily: "Quicksand",
        fontFamilyMonospace: "Disket Mono, Quicksand, monospace",
        headings: {
            fontFamily: "Quicksand",
            fontWeight: 600,
        },
        colors: {
            primary: {
                background: "#0077b6",
                foreground: "#ffffff",
            },
            secondary: {
                // background: "#457B9D",
                background: "#00bbf9",
                foreground: "#ffffff",
            },
            accent: {
                background: "#E63946",
                foreground: "#F1FAEE",
            },
        },
        loader: "dots",
        defaultRadius: "primary",
        radius: {
            primary: ".3rem",
        },
    };

    return globalTheme;
};
