import {
    Navbar,
    Group,
    Title,
    Code,
    createStyles,
    getStylesRef,
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
        link: "",
        label: "service management",
        icon: IconSettingsAutomation,
    },
    {
        link: "",
        label: "mechanic management",
        icon: IconHammer,
    },
    {
        link: "",
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
    link: {
        ...theme.fn.focusStyles(),
        display: "flex",
        alignItems: "center",
        textDecoration: "none",
        fontSize: theme.fontSizes.lg,
        color: theme.colors.primary.foreground,
        padding: `${theme.spacing.lg} ${theme.spacing.sm}`,
        borderRadius: theme.radius.sm,
        fontWeight: 500,

        "&:hover": {
            backgroundColor: theme.fn.lighten(
                theme.fn.variant({
                    variant: "filled",
                    color: theme.primaryColor,
                }).background,
                0.1
            ),
        },
    },
    linkIcon: {
        ref: getStylesRef("icon"),
        color: theme.white,
        opacity: 0.75,
        marginRight: theme.spacing.sm,
    },

    linkActive: {
        "&, &:hover": {
            backgroundColor: theme.fn.lighten(
                theme.fn.variant({
                    variant: "filled",
                    color: theme.primaryColor,
                }).background,
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

    return (
        <Navbar width={{ base: 300 }} p="xs" className="tw-bg-primary">
            <Navbar.Section grow>
                <Group
                    className="tw-pb-md tw-border-b-2 tw-border-white"
                    position="apart"
                >
                    <Title
                        order={5}
                        style={{
                            color: "white",
                        }}
                    >
                        MotoMedic
                    </Title>
                    <Code className={classes.version}>v0.0.0</Code>
                </Group>

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
