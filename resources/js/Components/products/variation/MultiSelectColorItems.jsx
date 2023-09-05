import { Box, CloseButton, Group, Text } from "@mantine/core";

import { forwardRef } from "react";

export const CustomColorItem = forwardRef(({ hex, label, ...others }, ref) => (
    <div ref={ref} {...others}>
        <Group noWrap>
            <Box
                sx={(theme) => ({
                    width: 20,
                    height: 20,
                    borderRadius: theme.radius.sm,
                    backgroundColor: `#${hex}`,
                })}
            />

            <div>
                <Text
                    sx={{
                        textTransform: "capitalize",
                    }}
                >
                    {label}
                </Text>
            </div>
        </Group>
    </div>
));

export const CustomColorSelected = ({ hex, label, onRemove, ...others }) => {
    return (
        <div {...others}>
            <Group
                py="xs"
                px="xs"
                spacing="xs"
                sx={(theme) => ({
                    borderRadius: theme.radius.sm,
                    border: `1px solid ${theme.colors.primary.background}`,
                })}
            >
                <Box
                    sx={(theme) => ({
                        width: 20,

                        height: 10,
                        backgroundColor: `#${hex}`,
                        borderRadius: theme.spacing.md,
                        boxShadow: "0px 0px 5px 0 #00000099",
                    })}
                />
                <Text>{label}</Text>

                <CloseButton
                    variant="transparent"
                    onMouseDown={onRemove}
                    size={22}
                    iconSize={18}
                    tabIndex={-1}
                />
            </Group>
        </div>
    );
};
