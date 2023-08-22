import {
    Navbar,
    Group,
    Title,
    Code,
    createStyles,
    getStylesRef,
    rem,
    Anchor,
    MediaQuery,
    Burger,
    ScrollArea,
} from "@mantine/core";
import {} from "@tabler/icons-react";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import {
    IconBellRinging,
    IconSwitchHorizontal,
    IconHammer,
    IconUser,
    IconShoppingBag,
    IconLogout,
    IconSettings2,
    IconSettingsAutomation,
} from "@tabler/icons-react";
import { useAppContext } from "./BasicLayout";

const mockData = [
    {
        link: "",
        label: "Cash",
        icon: IconBellRinging,
    },
    {
        link: "",
        label: "products",
        icon: IconShoppingBag,
    },
    {
        link: "add-product",
        label: "Add Products",
        icon: IconShoppingBag,
    },
    {
        link: "add-product-bulk",
        label: "Add Products Bulk",
        icon: IconShoppingBag,
    },
    {
        link: "service",
        label: "Service Management",
        icon: IconSettingsAutomation,
    },
    {
        link: "",
        label: "Mechanic Management",
        icon: IconHammer,
    },
    {
        link: "/customers",
        label: "customers",
        icon: IconUser,
    },
];

const useStyles = createStyles((theme) => ({
    navbar: {
        backgroundColor: theme.colors.primary.background,
    },
    version: {
        backgroundColor: theme.colors.secondary.background,
        color: theme.colors.secondary.foreground,
        fontWeight: 700,
    },
    header: {
        paddingBottom: theme.spacing.md,
        marginBottom: `calc(${theme.spacing.md} * 1.5)`,
        borderBottom: `${rem(1)} solid ${theme.fn.lighten(
            theme.colors.primary.background,
            0.1
        )}`,
    },
    footer: {
        paddingTop: theme.spacing.md,
        marginTop: theme.spacing.md,
        borderTop: `${rem(1)} solid ${theme.fn.lighten(
            theme.colors.primary.background,
            0.1
        )}`,
    },
    link: {
        ...theme.fn.focusStyles(),
        display: "flex",
        alignItems: "center",
        textDecoration: "none",
        fontSize: theme.fontSizes.lg,
        color: theme.colors.primary.foreground,
        padding: `${theme.spacing.md} ${theme.spacing.sm}`,
        borderRadius: theme.radius.sm,
        fontWeight: 500,

        "&:hover": {
            // backgroundColor: theme.fn.lighten(
            //     theme.colors.primary.background,
            //     0.1
            // ),
            backgroundColor: theme.colors.secondary.background,
        },
    },
    linkIcon: {
        ref: getStylesRef("icon"),
        color: theme.colors.primary.foreground,
        opacity: 0.75,
        marginRight: theme.spacing.md,
    },

    linkActive: {
        "&, &:hover": {
            backgroundColor: theme.fn.lighten(
                theme.colors.primary.background,
                0.15
            ),
            [`& .${getStylesRef("icon")}`]: {
                opacity: 0.9,
            },
        },
    },
}));

const BasicNavbar = () => {
    const { classes, cx } = useStyles();
    const [active, setActive] = useState(false);

    const links = mockData.map((item, itemIdx) => {
        return (
            <Link key={itemIdx} className={cx(classes.link)} href={item.link}>
                <item.icon className={classes.linkIcon} stroke={1.5} />
                <span>{item.label}</span>
            </Link>
        );
    });

    const { navHidden, setNavHidden } = useAppContext();
    const hideNavBar = !navHidden;
    return (
        // hiddenBreakpoint="sm"
        <Navbar
            hidden={hideNavBar}
            width={{ base: "100%", md: hideNavBar ? 100 : 300, xl: 320 }}
            p="md"
            fixed
            withBorder={false}
            className={classes.navbar}
        >
            <Navbar.Section grow component={ScrollArea}>
                {links}
            </Navbar.Section>

            <Navbar.Section className={classes.footer}>
                <Link href="#" className={classes.link}>
                    <IconSettings2 stroke={1.5} className={classes.linkIcon} />
                    <span>Settings</span>
                </Link>

                <Link href="#" className={classes.link}>
                    <IconSwitchHorizontal
                        stroke={1.5}
                        className={classes.linkIcon}
                    />
                    <span>Switch Account</span>
                </Link>

                <Link href="#" className={classes.link}>
                    <IconLogout stroke={1.5} className={classes.linkIcon} />
                    <span>Logout</span>
                </Link>
            </Navbar.Section>
        </Navbar>
    );
};

export default BasicNavbar;
