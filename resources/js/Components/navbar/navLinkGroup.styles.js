import { createStyles, rem, getStylesRef, px } from "@mantine/core";
export const useNavLinkGroupStyles = createStyles((theme) => ({
    control: {
        ...theme.fn.focusStyles(),
        width: "100%",
        display: "flex",
        alignItems: "center",
        textDecoration: "none",
        fontSize: theme.fontSizes.sm,
        color: theme.colors.primary.foreground,
        padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
        borderRadius: theme.radius.sm,
        fontWeight: 500,
        gap: theme.spacing.sm,
        "&:hover": {
            // backgroundColor: theme.fn.lighten(
            //     theme.colors.primary.background,
            //     0.1
            // ),
            backgroundColor: theme.colors.secondary.background,
        },
    },
    activeControl: {
        fontWeight: 700,
    },

    childLinkWrapper: {
        marginLeft: rem(px(theme.spacing.sm) + 12),
        borderLeft: `${rem(1)} dotted ${theme.colors.secondary.background}`,
        paddingLeft: rem(10),
    },

    link: {
        display: "flex",
        alignItems: "center",
        textDecoration: "none",
        fontSize: theme.fontSizes.sm,
        color: theme.colors.primary.foreground,
        padding: `${theme.spacing.sm} ${theme.spacing.sm}`,
        borderRadius: theme.radius.sm,
        fontWeight: 500,
        gap: theme.spacing.sm,

        "&:hover": {
            backgroundColor: theme.fn.darken(
                theme.colors.secondary.background,
                0.1
            ),
            color: theme.colors.secondary.foreground,
        },
    },

    iconWrapper: {
        backgroundColor: theme.fn.lighten(theme.colors.primary.background, 0.1),

        borderRadius: theme.radius.sm,
        padding: 5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    chevron: {
        ref: getStylesRef("icon"),
        transition: "transform 200ms ease",
        color: theme.colors.primary.foreground,
        fontSize: theme.fontSizes.lg,
        opacity: 0.75,
    },

    activeLink: {
        backgroundColor: theme.fn.darken(
            theme.colors.secondary.background,
            0.1
        ),
        color: theme.colors.secondary.foreground,
    },
    group: {
        flex: 1,
    },
    linkIcon: {
        ref: getStylesRef("icon"),
        color: theme.colors.primary.foreground,
        opacity: 0.75,
    },
}));
