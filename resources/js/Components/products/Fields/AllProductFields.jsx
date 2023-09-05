import ProductFields from "@/Components/products/Fields/ProductFields";
import { Button, Grid, Group, SimpleGrid, Stack } from "@mantine/core";
import BasicSection from "@/Components/sections/BasicSection";
import { productFields } from "../productFields";
import { ProductVariationFields } from "@/Components/products/variation/ProductVariationFields";
import { useProductForm } from "../utils/useProductForm";
import { router } from "@inertiajs/react";
const uploadProduct = (data) => {
    router.post("http://localhost:8000/api/product/create", data, {
        onSuccess: (msg) => {
            console.log({ msg });
        },
        onError: (err) => {
            console.error(err);
        },
    });
};
export const AllProductFields = () => {
    const form = useProductForm();
    const infoFields = productFields.basicInfo.map((field, fieldIdx) => {
        return <ProductFields form={form} field={field} key={fieldIdx} />;
    });
    const extraInfoFiels = productFields.extraInfos.map((field, fieldIdx) => {
        return <ProductFields form={form} field={field} key={fieldIdx} />;
    });
    const descFields = productFields.desc.map((field, fieldIdx) => {
        return <ProductFields form={form} field={field} key={fieldIdx} />;
    });
    const formalFields = productFields.formals.map((field, fieldIdx) => {
        return <ProductFields form={form} field={field} key={fieldIdx} />;
    });
    const imgFields = productFields.img.map((field, fieldIdx) => {
        return <ProductFields form={form} field={field} key={fieldIdx} />;
    });
    const seoTagFields = productFields.seoTag.map((field, fieldIdx) => {
        return <ProductFields form={form} field={field} key={fieldIdx} />;
    });
    const variationFields = productFields.variation.map((field, fieldIdx) => {
        return <ProductFields form={form} field={field} key={fieldIdx} />;
    });

    const onFormSubmit = (values) => {
        console.log(values, "from form");
        uploadProduct({
            productName: "Vanella",
            categoryId: 2,
            brandId: 2,
            model: "RandomModel",
            color: "RandomColor",
            material: "RandomMaterial",
            size: "RandomSize",
            year: 2022,
            compitibility: "RandomCompitibility",
            condition: "RandomCondition",
            weight: "RandomWeight",
            quantity: 10,
            price: 10,
            discount: 10,
            shortDescriptions: "RandomShortDescriptions",
            availability: 0,
            status: 0,
        });
    };
    return (
        <form onSubmit={form.onSubmit(onFormSubmit)}>
            <Stack spacing="xl">
                {/* basic and description */}
                <Grid>
                    <Grid.Col span={12}>
                        <BasicSection title="Basic Info">
                            <SimpleGrid cols={4}>{infoFields}</SimpleGrid>
                        </BasicSection>
                    </Grid.Col>
                    <Grid.Col span={12}>
                        <BasicSection title="Product Description">
                            <SimpleGrid cols={1}>{descFields}</SimpleGrid>
                        </BasicSection>
                    </Grid.Col>
                </Grid>

                <BasicSection title="Image of Product">
                    <SimpleGrid cols={1}>{imgFields}</SimpleGrid>
                </BasicSection>

                {/* formal fields and extra infos */}
                <Grid>
                    <Grid.Col span={7}>
                        <BasicSection title="Tax Fields">
                            <SimpleGrid cols={3}>{formalFields}</SimpleGrid>
                        </BasicSection>
                    </Grid.Col>
                    <Grid.Col span={5}>
                        <BasicSection title="Extra Info">
                            <SimpleGrid cols={1}>{extraInfoFiels}</SimpleGrid>
                        </BasicSection>
                    </Grid.Col>
                </Grid>

                <BasicSection title="SEO Tags">
                    <SimpleGrid cols={1}>{seoTagFields}</SimpleGrid>
                </BasicSection>

                <ProductVariationFields />

                <BasicSection>
                    <Group>
                        <Button type="submit" size="lg">
                            Submit
                        </Button>
                        <Button type="button" size="lg">
                            Cancel
                        </Button>
                    </Group>
                </BasicSection>
            </Stack>
        </form>
    );
};
