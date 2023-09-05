import { Link } from "@inertiajs/react";
import {
    Overlay,
    Box,
    Group,
    Navbar,
    ScrollArea,
    Transition,
} from "@mantine/core";
import { useState } from "react";
import { TbLogout, TbSettings2, TbSwitchHorizontal } from "react-icons/tb";

import { useAppContext } from "@/contexts/AppContext";
import { motion } from "framer-motion";
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
    return (
        // hideNavBar ? 300 : 300
        // hiddenBreakpoint="sm"
        //
        // p={hideNavBar ? 0 : "md"}
        <>
            <Navbar
                hidden={hideNavBar}
                width={{
                    base: "100%",
                    sm: hideNavBar ? 0 : 300,
                    md: hideNavBar ? 0 : 300,
                    xl: hideNavBar ? 0 : 320,
                }}
                fixed
                withBorder={false}
                style={{
                    zIndex: 300,
                    overflow: "hidden",
                    backgroundColor: "transparent",
                }}
            >
                <Box
                    p={"md"}
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

const CustomTransition = ({ opened, children }) => {
    return (
        <Transition
            timingFunction="ease"
            duration={300}
            mounted={opened}
            transition={{
                in: {
                    width: "100%",
                },
                out: {
                    width: 0,
                },
                common: {
                    transformOrigin: "right",
                },
                transitionProperty: "all",
            }}
        >
            {(styles) => <div style={styles}>{children}</div>}
        </Transition>
    );
};

const MotionAnimation = ({ opened, children }) => {
    return (
        <motion.div
            animate={{
                width: opened ? "auto" : 0,
            }}
        >
            {children}
        </motion.div>
    );
};

export default BasicNavbar;
