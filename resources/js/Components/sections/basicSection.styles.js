import { createStyles } from "@mantine/core";
export const useBasicSectionStyles = createStyles((theme) => ({
    paper: {
        // backgroundColor: theme.fn.lighten(theme.colors.primary.background, 0.8),
        backgroundColor: theme.colors.card.background,
        color: theme.colors.card.foreground,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        // backgroundImage: theme.fn.gradient({
        //     from: "red",
        //     to: "orange",
        //     deg: 45,
        // }),
    },
    title: {
        fontWeight: 600,
        fontSize: theme.fontSizes.lg,
        paddingTop: theme.spacing.lg,
        paddingBottom: theme.spacing.lg,
        color: theme.colors.card.foreground,
    },
}));
