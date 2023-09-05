import { Table, SimpleGrid, Grid, Box } from "@mantine/core";
import { useSelector } from "react-redux";
const VariantProducts = () => {
    const variants = useSelector((state) => state.product.variants);
    console.log({ variants });
    const ths = ["Variant Name", "price", "sku", "image"].map((label) => {
        return <th key={label}>{label}</th>;
    });
    const trows = variants.map((variant, variantIdx) => {
        const variantEntries = Object.entries(variant);
        return (
            <tr key={variantIdx}>
                {variantEntries.map((entry, entryIdx) => {
                    return <td key={entryIdx}>{entry[1]}</td>;
                })}
            </tr>
        );
    });
    return (
        <Box
            sx={(theme) => ({
                backgroundColor: theme.white,
            })}
        >
            <Table
                horizontalSpacing="xl"
                verticalSpacing="sm"
                highlightOnHover
                withBorder
                withColumnBorders
            >
                <thead>
                    <tr>{ths}</tr>
                </thead>
                <tbody>{trows}</tbody>
            </Table>
        </Box>
    );
};

export default VariantProducts;
