import { useBasicSectionStyles } from "./basicSection.styles";
import { Paper, Text } from "@mantine/core";

const BasicSection = ({ title, children }) => {
    const { classes, cx } = useBasicSectionStyles();

    return (
        <Paper
            withBorder
            className={cx(classes.paper)}
            shadow="sm"
            radius="md"
            p="lg"
            px={"lg"}
        >
            <Text component="p" className={cx(classes.title)}>
                {title}
            </Text>
            {children}
        </Paper>
    );
};
export default BasicSection;
