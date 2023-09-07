import { Link } from "@inertiajs/react";
import {
    Overlay,
    Box,
    Group,
    Navbar,
    ScrollArea,
    Transition,
} from "@mantine/core";
import { useRef, useEffect, useState } from "react";
import { TbLogout, TbSettings2, TbSwitchHorizontal } from "react-icons/tb";

import { useAppContext } from "@/contexts/AppContext";
import NavLinkGroup from "./NavLinkGroup";
import { mockData } from "./navdata.mock";
import { useNavBarStyles } from "./navstyles";

const BasicNavbar = () => {
    const { classes, cx } = useNavBarStyles();
    const [active, setActive] = useState(false);

    const links = mockData.map((item, itemIdx) => {
        const { icon, label, childLinks, href } = item;
        return (
            <NavLinkGroup
                Icon={icon}
                href={href ? href : ""}
                label={label}
                childLinks={childLinks}
                key={itemIdx}
            />
        );
    });

    const { navHidden, setNavHidden } = useAppContext();
    const hideNavBar = navHidden;
    /*
    sm: hideNavBar ? 0 : 300,
    md: hideNavBar ? 0 : 300,
    xl: hideNavBar ? 0 : 320,

    */
    return (
        <>
            <Navbar
                hidden={hideNavBar}
                width={{
                    base: hideNavBar ? 0 : "100%",
                    sm: hideNavBar ? 0 : 300,
                }}
                fixed
                withBorder={false}
                sx={{
                    zIndex: 300,
                    overflow: "hidden",
                    transition: "width 400ms ease, min-width 400ms ease",
                    backgroundColor: "transparent",
                }}
            >
                {/* <motion.div
                    animate={{
                        width: hideNavBar ? 0 : 200,
                    }}
                    onUpdate={(value) => {
                        console.log("animate", value);
                    }}
                    style={{
                        width: 200,
                        height: 300,
                        backgroundColor: "red",
                    }}
                ></motion.div> */}
                <Box
                    p={"md"}
                    pr={0}
                    sx={(theme) => ({
                        display: "flex",
                        flexDirection: "column",
                        flex: 1,
                        height: "100%",
                        maxHeight: "100%",
                    })}
                >
                    <Box
                        sx={(theme) => ({
                            display: "flex",
                            flexDirection: "column",
                            flex: 1,
                            backgroundColor: theme.colors.primary.background,
                            borderRadius: "10px",
                            position: "relative",
                            height: "100%",
                            maxHeight: "100%",
                        })}
                    >
                        <Navbar.Section p={"md"} grow component={ScrollArea}>
                            {links}
                        </Navbar.Section>

                        <Navbar.Section p={"md"} className={classes.footer}>
                            <Group position="center">
                                <Link href="#" className={classes.link}>
                                    <TbSettings2 className={classes.linkIcon} />
                                    {/* <span>Settings</span> */}
                                </Link>

                                <Link href="#" className={classes.link}>
                                    <TbSwitchHorizontal
                                        className={classes.linkIcon}
                                    />
                                    {/* <span>Switch Account</span> */}
                                </Link>

                                <Link href="#" className={classes.link}>
                                    <TbLogout className={classes.linkIcon} />
                                    {/* <span>Logout</span> */}
                                </Link>
                            </Group>
                        </Navbar.Section>
                    </Box>
                </Box>
            </Navbar>
            {/* {hideNavBar ? null : (
                <Overlay
                    zIndex={1}
                    opacity={0.5}
                />
            )} */}
        </>
    );
};

export default BasicNavbar;
