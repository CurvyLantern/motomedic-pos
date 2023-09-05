import { Link } from "@inertiajs/react";
import { rem, Group, Navbar, ScrollArea, Transition } from "@mantine/core";

import { TbLogout, TbSettings2, TbSwitchHorizontal } from "react-icons/tb";
import { useState } from "react";

import { useNavBarStyles } from "./navstyles";
import { mockData } from "./navdata.mock";
import { useAppContext } from "@/contexts/AppContext";
import NavLinkGroup from "./NavLinkGroup";
import { motion } from "framer-motion";
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
    const hideNavBar = !navHidden;
    return (
        // hideNavBar ? 300 : 300
        // hiddenBreakpoint="sm"
        //
        <Navbar
            hidden={hideNavBar}
            width={{
                base: "100%",
                md: hideNavBar ? 0 : 300,
                xl: hideNavBar ? 0 : 320,
            }}
            p={hideNavBar ? 0 : "md"}
            fixed
            withBorder={false}
            className={classes.navbar}
        >
            <Navbar.Section grow component={ScrollArea}>
                {links}
            </Navbar.Section>

            <Navbar.Section className={classes.footer}>
                <Group position="center">
                    <Link href="#" className={classes.link}>
                        <TbSettings2 className={classes.linkIcon} />
                        {/* <span>Settings</span> */}
                    </Link>

                    <Link href="#" className={classes.link}>
                        <TbSwitchHorizontal className={classes.linkIcon} />
                        {/* <span>Switch Account</span> */}
                    </Link>

                    <Link href="#" className={classes.link}>
                        <TbLogout className={classes.linkIcon} />
                        {/* <span>Logout</span> */}
                    </Link>
                </Group>
            </Navbar.Section>
        </Navbar>
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
