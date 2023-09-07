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
import NavBar from "@/Components/navbar/NavBar";
import { AppShellContextProvider, useAppContext } from "@/contexts/AppContext";
import { ChildrenWrapper } from "@/Layouts/ChildrenWrapper";

const BasicLayout = ({ children }) => {
    return (
        // <BasicNavbar />
        <AppShellContextProvider>
            <AppShell
                styles={(theme) => ({
                    main: {
                        backgroundColor: theme.colors.main.background,
                        color: theme.colors.main.foreground,
                        transition: "padding-left 500ms ease",
                    },
                })}
                navbarOffsetBreakpoint="md"
                navbar={<NavBar />}
                header={<BasicHeader />}
            >
                <ChildrenWrapper>{children}</ChildrenWrapper>
            </AppShell>
        </AppShellContextProvider>
    );
};


const useBasicHeaderStyles = createStyles((theme) => ({
    header: {
        backgroundColor: theme.fn.darken(theme.colors.primary.background, 0.1),
        paddingBottom: "1rem",
    },
}));
const BasicHeader = () => {
    const { navHidden, setNavHidden, drawerOpened, setDrawerOpened } =
        useAppContext();
    const { classes, cx } = useBasicHeaderStyles();
    const burgerOpened = !navHidden;
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
                        opened={burgerOpened}
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
