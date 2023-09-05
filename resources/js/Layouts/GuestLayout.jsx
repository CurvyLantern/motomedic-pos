import {
    Paper,
    createStyles,
    TextInput,
    PasswordInput,
    Checkbox,
    Button,
    Title,
    Text,
    Anchor,
    rem,
    Stack,
    Grid,
    Box,
} from "@mantine/core";
import FinanceSvg from "@/assets/svgs/finance.svg";

const useStyles = createStyles((theme) => ({
    wrapper: {
        minHeight: rem(900),
        backgroundSize: "cover",
        backgroundImage:
            "url(https://images.unsplash.com/photo-1484242857719-4b9144542727?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80)",
    },

    form: {
        borderRight: `${rem(1)} solid ${
            theme.colorScheme === "dark"
                ? theme.colors.dark[7]
                : theme.colors.gray[3]
        }`,
        minHeight: rem(900),
        maxWidth: rem(450),
        paddingTop: rem(80),

        [theme.fn.smallerThan("sm")]: {
            maxWidth: "100%",
        },
    },

    title: {
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },

    footer: {
        padding: theme.spacing.lg,
        border: `1px solid ${theme.colors.primary.background}`,
        color: theme.colors.main.foreground,
        borderRadius: theme.spacing.sm,
    },
}));

const GuestLayout = ({ children }) => {
    const { classes } = useStyles();
    return (
        <Box
            sx={(theme) => ({
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                boxSizing: "border-box",
                backgroundColor: theme.colors.main.background,
                padding: "3rem",
            })}
        >
            <header>
                <div>MotoMedic</div>
            </header>
            <Grid
                sx={(theme) => ({
                    flex: 1,
                    maxHeight: "100%",
                    maxWidth: "100%",
                })}
            >
                <Grid.Col span={6}>
                    <Stack>
                        <h1>Point of Sale Software</h1>
                        <img src={FinanceSvg} alt="" />
                    </Stack>
                </Grid.Col>
                <Grid.Col span={6}>{children}</Grid.Col>
            </Grid>
            <footer className={classes.footer}>Copyright Rabbitic</footer>
        </Box>
    );
};

export default GuestLayout;
