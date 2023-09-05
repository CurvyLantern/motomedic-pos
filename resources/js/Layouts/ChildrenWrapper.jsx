import { Box, ScrollArea } from "@mantine/core";

export const ChildrenWrapper = ({ children }) => {
    // calc(100vh - var(--mantine-header-height, 0rem) - var(--mantine-footer-height, 0rem));
    return (
        <Box
            sx={(theme) => ({
                borderRadius: theme.spacing.sm,
                // border: `1px solid ${theme.colors.primary.background}`,
                height: "calc(100vh - var(--mantine-header-height, 0rem) - var(--mantine-footer-height, 0rem) - 2rem) ",
                maxHeight:
                    "calc(100vh - var(--mantine-header-height, 0rem) - var(--mantine-footer-height, 0rem) - 2rem) ",
            })}
        >
            <ScrollArea
                sx={(t) => ({
                    height: "100%",
                })}
            >
                {children}
            </ScrollArea>
        </Box>
    );
};
