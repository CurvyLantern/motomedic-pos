import { createStyles, Paper, Text } from "@mantine/core";
const useStyles = createStyles((theme) => ({
    paper: {
        backgroundColor: theme.fn.lighten(theme.colors.primary.background, 0.9),
        height: "100%",
    },
    title: {
        fontWeight: 600,
        fontSize: theme.fontSizes.lg,
        paddingTop: theme.spacing.lg,
        paddingBottom: theme.spacing.lg,
    },
}));
const BaseCard = ({ title, children }) => {
    const { classes, cx } = useStyles();

    return (
        <Paper className={cx(classes.paper)} shadow="xs" radius="xs" p="sm">
            {title ? (
                <Text component="p" className={cx(classes.title)}>
                    {title}
                </Text>
            ) : null}
            {children}
        </Paper>
    );
};
export default BaseCard;
