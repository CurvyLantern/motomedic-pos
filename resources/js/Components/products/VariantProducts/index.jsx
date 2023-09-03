import { Table, SimpleGrid, Grid } from "@mantine/core";

const VariantProducts = () => {
    const ths = ["Variant Name", "color", "size", "image"].map((label) => {
        return <th key={label}>{label}</th>;
    });
    const trows = [].map((row, rowIdx) => {
        return <tr>asdasd</tr>;
    });
    return (
        <Table striped highlightOnHover withBorder withColumnBorders>
            <thead>
                <tr>{ths}</tr>
            </thead>
            <tbody>{trows}</tbody>
        </Table>
    );
};

export default VariantProducts;
