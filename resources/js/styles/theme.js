export const useGlobalTheme = ({ colorScheme }) => {
    const isDark = colorScheme === "dark";

    /** import('@mantine/core').MantineThemeOverride */
    const globalTheme = {
        colorScheme,
        fontFamily: "MontSerrat",
        fontFamilyMonospace: "Disket Mono, Quicksand, monospace",
        headings: {
            fontFamily: "Quicksand",
            fontWeight: 600,
        },
        label: {
            fontWeight: 900,
        },
        shadows: {
            card: "0 0 5px #22223b33",
        },
        colors: {
            main: {
                background: "#f1f1f1",
                foreground: "#000",
            },
            card: {
                background: "#fefefe",
                foreground: "#22223b",
            },
            primary: {
                background: "#015190",
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
