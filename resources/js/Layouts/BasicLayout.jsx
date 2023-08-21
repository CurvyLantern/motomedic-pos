import {
    AppShell,
    Header,
    MediaQuery,
    Burger,
    Anchor,
    Title,
    Group,
    createStyles,
    rem,
} from "@mantine/core";
import { Link } from "@inertiajs/react";

import BasicNavbar from "./BasicNavbar";
import { createContext, useContext, useState } from "react";

const AppShellContext = createContext(null);
export const useAppContext = () => useContext(AppShellContext);

const AppShellContextProvider = ({ children }) => {
    const [navHidden, setNavHidden] = useState(false);
    const [drawerOpened, setDrawerOpened] = useState(false);
    return (
        <AppShellContext.Provider
            value={{
                navHidden,
                drawerOpened,
                setNavHidden,
                setDrawerOpened,
            }}
        >
            {children}
        </AppShellContext.Provider>
    );
};

const BasicLayout = ({ children }) => {
    return (
        // <BasicNavbar />
        <AppShellContextProvider>
            <AppShell
                navbarOffsetBreakpoint="md"
                navbar={<BasicNavbar />}
                header={<BasicHeader />}
            >
                {children}
            </AppShell>
        </AppShellContextProvider>
    );
};
const useStyles = createStyles((theme) => ({
    header: {
        backgroundColor: theme.fn.lighten(theme.colors.primary.background, 0.2),
        paddingBottom: "1rem",
    },
}));

const BasicHeader = () => {
    const { navHidden, setNavHidden, drawerOpened, setDrawerOpened } =
        useAppContext();
    const { classes, cx } = useStyles();
    return (
        <Header
            withBorder={false}
            className={classes.header}
            height={60}
            p="xs"
        >
            <Group>
                {/* largerThan="sm" styles={{ display: "none" }} */}
                <MediaQuery>
                    <Burger
                        opened={navHidden}
                        color="white"
                        onClick={() => setNavHidden((o) => !o)}
                        size="sm"
                        mr="xl"
                    />
                </MediaQuery>
                <Anchor component={Link} href="/">
                    <Title size="h2" order={5} color="white">
                        MotoMedic
                    </Title>
                </Anchor>

                {/* drawer button */}

                <Burger
                    opened={drawerOpened}
                    color="white"
                    onClick={() => setDrawerOpened((o) => !o)}
                    size="sm"
                    mr="xl"
                    ml="auto"
                />
            </Group>
        </Header>
    );
};

export default BasicLayout;
