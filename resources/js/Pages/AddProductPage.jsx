import { AllProductFields } from "@/Components/products/Fields/AllProductFields";
import { Stack } from "@mantine/core";

const AddProductPage = () => {
    return (
        <Stack>
            <h1>Create A Single Product</h1>
            <AllProductFields />
        </Stack>
    );
};

export default AddProductPage;
