import { Link } from "@inertiajs/react";
import { createStyles, getStylesRef } from "@mantine/core";
import {
    Box,
    Collapse,
    Group,
    ThemeIcon,
    UnstyledButton,
    rem,
    px,
} from "@mantine/core";
import { TbChevronRight } from "react-icons/tb";
import { useState } from "react";
import { useNavLinkGroupStyles } from "./navLinkGroup.styles";

const NavLinkGroup = ({ href, Icon, label, childLinks }) => {
    const { classes, cx, theme } = useNavLinkGroupStyles();
    const hasChild = Array.isArray(childLinks);
    const [opened, setOpened] = useState(false);
    const pathname = "";

    const items = (hasChild ? childLinks : []).map(
        (childLinkItem, childLinkIdx) => {
            const { href, icon, label } = childLinkItem;
            const getHref = (path) => `/${href}`;
            return (
                <Link
                    href={getHref(href)}
                    key={childLinkIdx}
                    className={`${classes.link} ${
                        href === pathname && classes.activeLink
                    }`}
                >
                    {label}
                </Link>
            );
        }
    );

    const linkContent = (
        <Group position="apart" spacing={0} className={classes.group}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Icon className={classes.linkIcon} size={24} />
                <Box ml="md">{label}</Box>
            </Box>
            {hasChild && (
                <TbChevronRight
                    className={classes.chevron}
                    style={{
                        transform: opened
                            ? `rotate(${theme.dir === "rtl" ? -90 : 90}deg)`
                            : "none",
                    }}
                />
            )}
        </Group>
    );

    return (
        <div>
            {href ? (
                <Link
                    href={href}
                    className={`${classes.control} ${
                        href === pathname && classes.activeControl
                    }`}
                >
                    {linkContent}
                </Link>
            ) : (
                <UnstyledButton
                    onClick={() => {
                        if (hasChild) {
                            setOpened((o) => !o);
                            return;
                        }
                    }}
                    className={classes.control}
                >
                    {linkContent}
                </UnstyledButton>
            )}
            {hasChild ? (
                <Collapse className={classes.childLinkWrapper} in={opened}>
                    {items}
                </Collapse>
            ) : null}
        </div>
    );
};

export default NavLinkGroup;
