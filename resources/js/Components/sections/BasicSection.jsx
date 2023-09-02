import { useBasicSectionStyles } from "./basicSection.styles";
import { Paper, Text } from "@mantine/core";

const BasicSection = ({ title, children }) => {
    const { classes, cx } = useBasicSectionStyles();

    return (
        <Paper className={cx(classes.paper)} shadow="xs" radius="xs" p="sm">
            <Text component="p" className={cx(classes.title)}>
                {title}
            </Text>
            {children}
        </Paper>
    );
};
export default BasicSection;
