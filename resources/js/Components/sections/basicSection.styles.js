import { createStyles } from "@mantine/core";
export const useBasicSectionStyles = createStyles((theme) => ({
    paper: {
        // backgroundColor: theme.fn.lighten(theme.colors.primary.background, 0.8),
        backgroundColor: theme.fn.lighten(theme.colors.yellow[7], 0.8),
        height: "100%",
    },
    title: {
        fontWeight: 600,
        fontSize: theme.fontSizes.lg,
        paddingTop: theme.spacing.lg,
        paddingBottom: theme.spacing.lg,
    },
}));
