import { useBasicSectionStyles } from "./basicSection.styles";
import { Paper, Text, Box } from "@mantine/core";

const BasicSection = ({ title, children, ...props }) => {
    const { classes, cx } = useBasicSectionStyles();

    return (
        <Paper
            withBorder
            className={cx(classes.paper)}
            shadow="sm"
            radius="md"
            p="lg"
            {...props}
        >
            {title ? (
                <Text component="p" className={cx(classes.title)}>
                    {title}
                </Text>
            ) : null}
            <Box sx={{ flex: 1 }}>{children}</Box>
        </Paper>
    );
};
export default BasicSection;
