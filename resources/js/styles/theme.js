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
                background: "#1D3557",
                foreground: "#F1FAEE",
            },
            secondary: {
                background: "#457B9D",
                foreground: "#E7FEFF",
            },
            accent: {
                background: "#E63946",
                foreground: "#F1FAEE",
            },
        },
        loader: "dots",
        defaultRadius: "primary",
        radius: {
            primary: ".5rem",
        },
    };

    return globalTheme;
};
