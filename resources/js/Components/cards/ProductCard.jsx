import {
    Card,
    Image,
    Text,
    Group,
    Badge,
    createStyles,
    Center,
    Button,
    rem,
} from "@mantine/core";
import {
    IconGasStation,
    IconGauge,
    IconManualGearbox,
    IconUsers,
} from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
    card: {
        backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
        display: "flex",
        flexDirection: "column",
    },

    imageSection: {
        padding: theme.spacing.md,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderBottom: `${rem(1)} solid ${
            theme.colorScheme === "dark"
                ? theme.colors.dark[4]
                : theme.colors.gray[3]
        }`,
    },

    label: {
        marginBottom: theme.spacing.xs,
        lineHeight: 1,
        fontWeight: 700,
        fontSize: theme.fontSizes.xs,
        letterSpacing: rem(-0.25),
        textTransform: "uppercase",
    },

    section: {
        padding: theme.spacing.md,
        borderTop: `${rem(1)} solid ${
            theme.colorScheme === "dark"
                ? theme.colors.dark[4]
                : theme.colors.gray[3]
        }`,
    },

    icon: {
        marginRight: rem(5),
        color:
            theme.colorScheme === "dark"
                ? theme.colors.dark[2]
                : theme.colors.gray[5],
    },
}));

export function ProductCard({ product }) {
    const { classes } = useStyles();

    const discountPrefix = product.discountType === "fixed" ? "৳" : "%";
    const mockdata = [
        { label: "Size", content: product.size, icon: IconUsers },
        {
            label: "Compatibility",
            content: product.compitibility,
            icon: IconGauge,
        },
        {
            label: "Condition",
            content: product.condition,
            icon: IconManualGearbox,
        },
        { label: "Weight", content: product.weight, icon: IconGasStation },
    ];
    const features = mockdata.map((feature) => (
        <Center key={feature.label}>
            <feature.icon size=".5rem" className={classes.icon} />
            <Text size="xs">
                {feature.label} - {feature.content}
            </Text>
        </Center>
    ));

    return (
        <Card withBorder radius="md" className={classes.card}>
            <Card.Section className={classes.imageSection}>
                <Image
                    src={
                        product.primaryImg ?? "https://i.imgur.com/ZL52Q2D.png"
                    }
                    alt="Tesla Model S"
                />
            </Card.Section>

            <Group
                position="apart"
                mt="md"
                sx={{
                    flex: 1,
                }}
            >
                <div>
                    <Text fw={500}>{product.productName}</Text>
                    <Text fz="xs" c="dimmed">
                        {product.shortDescriptions}
                    </Text>
                </div>
                <Badge variant="outline">
                    {product.discount} {discountPrefix} off
                </Badge>
            </Group>

            <Card.Section className={classes.section} mt="md">
                <Text fz="sm" c="dimmed" className={classes.label}>
                    Basic configuration
                </Text>

                <Group spacing={8} mb={-8}>
                    {features}
                </Group>
            </Card.Section>

            <Card.Section className={classes.section}>
                <Group spacing={30}>
                    <div>
                        <Text fz="xl" fw={700} sx={{ lineHeight: 1 }}>
                            {"৳ "}
                            {product.price ?? "168.00"}
                        </Text>
                    </div>

                    <Button radius="xl" style={{ flex: 1 }}>
                        Order
                    </Button>
                </Group>
            </Card.Section>
        </Card>
    );
}
