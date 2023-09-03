import {
    TextInput,
    NumberInput,
    Select,
    Grid,
    SimpleGrid,
    Stack,
    Paper,
    Text,
    createStyles,
    Button,
    Group,
    Checkbox,
    FileButton,
    Textarea,
    MultiSelect,
    Box,
    CloseButton,
} from "@mantine/core";

import { useState, forwardRef, useEffect } from "react";
import BasicSection from "@/Components/sections/BasicSection";
import ProductFields, { fieldTypes } from "@/Components/fields/ProductFields";
import { Colors } from "@/Components/fields/colors.mock";
import VariantProducts from "@/Components/products/VariantProducts";
import { useSelector } from "react-redux";

const fields = {
    basicInfo: [
        {
            label: "Product Name",
            type: fieldTypes.text,
        },
        {
            label: "Category",
            type: fieldTypes.select,
        },
        {
            label: "Sub Category",
            type: fieldTypes.select,
            data: [
                { value: "1", label: "hero honda 1" },
                { value: "2", label: "hero honda 2" },
                { value: "3", label: "hero honda 3" },
                { value: "4", label: "hero honda 4" },
            ],
        },
        {
            label: "Brand",
            type: fieldTypes.select,
            data: [
                { value: "1", label: "hero honda 1" },
                { value: "2", label: "hero honda 2" },
                { value: "3", label: "hero honda 3" },
                { value: "4", label: "hero honda 4" },
            ],
        },
        {
            label: "Unit",
            type: fieldTypes.select,
        },
        {
            label: "SKU",
            type: fieldTypes.text,
        },
        {
            label: "Quantity",
            type: fieldTypes.number,
        },
        {
            label: "Minimum purchase qty",
            type: fieldTypes.number,
        },
    ],
    extraInfos: [
        {
            label: "Barcode",
            type: fieldTypes.text,
        },
        {
            label: "Upload barcode image",
            type: fieldTypes.fileButton,
        },
        {
            label: "Refundable",
            type: fieldTypes.checkbox,
        },
    ],
    desc: [
        {
            label: "Description",
            type: fieldTypes.richText,
        },
    ],
    formals: [
        {
            label: "Tax",
            type: fieldTypes.number,
        },
        {
            label: "Discount Type",
            type: fieldTypes.select,
        },
        {
            label: "Price",
            type: fieldTypes.number,
        },
        {
            label: "Status",
            type: fieldTypes.select,
        },
    ],
    img: [
        {
            label: "Product Image",
            type: fieldTypes.dropZone,
        },
    ],
    variation: [
        {
            label: "Colors",
            type: fieldTypes.multiSelect,
        },
        {
            label: "Attributes",
            type: fieldTypes.multiSelect,
        },
        {
            label: "Size",
            type: fieldTypes.multiSelect,
        },
    ],
    seoTag: [
        {
            label: "Meta Title",
            type: fieldTypes.text,
        },
        {
            label: "Meta Description",
            type: fieldTypes.textarea,
        },
        {
            label: "Meta Image",
            type: fieldTypes.fileButton,
        },
    ],
};

const AddProductPage = () => {
    const infoFields = fields.basicInfo.map((field, fieldIdx) => {
        return <ProductFields field={field} key={fieldIdx} />;
    });
    const extraInfoFiels = fields.extraInfos.map((field, fieldIdx) => {
        return <ProductFields field={field} key={fieldIdx} />;
    });
    const descFields = fields.desc.map((field, fieldIdx) => {
        return <ProductFields field={field} key={fieldIdx} />;
    });
    const formalFields = fields.formals.map((field, fieldIdx) => {
        return <ProductFields field={field} key={fieldIdx} />;
    });
    const imgFields = fields.img.map((field, fieldIdx) => {
        return <ProductFields field={field} key={fieldIdx} />;
    });
    const seoTagFields = fields.seoTag.map((field, fieldIdx) => {
        return <ProductFields field={field} key={fieldIdx} />;
    });
    const variationFields = fields.variation.map((field, fieldIdx) => {
        return <ProductFields field={field} key={fieldIdx} />;
    });

    return (
        <Stack>
            <BasicSection title="Basic Info">
                <SimpleGrid cols={4}>{infoFields}</SimpleGrid>
            </BasicSection>

            <BasicSection title="Product Description">
                <SimpleGrid cols={1}>{descFields}</SimpleGrid>
            </BasicSection>
            <BasicSection title="Tax Fields">
                <SimpleGrid cols={4}>{formalFields}</SimpleGrid>
            </BasicSection>
            <BasicSection title="Extra Info">
                <SimpleGrid cols={1}>{extraInfoFiels}</SimpleGrid>
            </BasicSection>
            <BasicSection title="Image of Product">
                <SimpleGrid cols={1}>{imgFields}</SimpleGrid>
            </BasicSection>

            <BasicSection title="SEO Tags">
                <SimpleGrid cols={1}>{seoTagFields}</SimpleGrid>
            </BasicSection>

            <ProductVariation />

            <BasicSection>
                <Group>
                    <Button size="lg">Submit</Button>
                    <Button size="lg">Cancel</Button>
                </Group>
            </BasicSection>
        </Stack>
    );
};
function generateCombinations(
    colors,
    attrs,
    attrSelector = "values",
    currentCombination = "",
    index = 0,
    output = []
) {
    if (attrs.length <= 0) {
        return [colors];
    }

    if (index === attrs.length) {
        output.push(currentCombination);
        return output;
    }

    console.log(attrs);

    for (const attr of attrs[index][attrSelector]) {
        const value = attr;
        console.log({ value }, " from 221 ");
        const newCombination =
            currentCombination === ""
                ? `${colors}-${value}`
                : `${currentCombination}-${value}`;
        generateCombinations(
            colors,
            attrs,
            attrSelector,
            newCombination,
            index + 1,
            output
        );
    }

    return output;
}

const colors = ["red", "blue"];
const attrs = [
    { values: ["x", "y", "z"] },
    { values: [1, 2, 3] },
    { values: ["cook", "book", "sook"] },
];

const ProductVariation = () => {
    const [selectedAttrsValue, setSelectedAttrsValue] = useState([]);
    const availableColors = useSelector((state) => state.basic.colors);
    const availableAttrs = useSelector((state) => state.product.attributes);
    const selectedAttrs = availableAttrs.filter((attrs) => {
        return selectedAttrsValue.includes(attrs.value);
    });
    // child Attrs values
    const [selectedChildAttrs, setSelectedChildAttrs] = useState([]);
    const [selectedColorValues, setSelectedColorValues] = useState([]);
    const [variantDataArr, setVariantDataArr] = useState([]);

    useEffect(() => {
        const total = [];
        console.log(selectedChildAttrs, " selected childAttrs ");
        selectedColorValues.forEach((color) => {
            const output = generateCombinations(
                color,
                selectedChildAttrs,
                "values"
            );
            console.log({ output });
            total.push(...output);
        });

        console.log({ total }, "from use Effect");
    }, [selectedColorValues, selectedChildAttrs]);
    return (
        <BasicSection title="Product Variation">
            <SimpleGrid cols={2}>
                {/* product colors */}
                <MultiSelect
                    valueComponent={CustomColorSelected}
                    itemComponent={CustomColorItem}
                    label="Colors"
                    placeholder="Pick all that you like"
                    data={availableColors}
                    onChange={(colorValues) => {
                        setSelectedColorValues(colorValues);
                    }}
                ></MultiSelect>

                {/* product attributes */}
                <MultiSelect
                    onChange={(value) => {
                        setSelectedAttrsValue(value);
                    }}
                    label="Attributes"
                    placeholder="Pick all that you like"
                    data={availableAttrs}
                ></MultiSelect>
            </SimpleGrid>

            <SimpleGrid>
                {selectedAttrs.map((attr, attrIdx) => {
                    return (
                        <MultiSelect
                            onChange={(values) => {
                                setSelectedChildAttrs((p) => {
                                    const childDataArr = p.find(
                                        (v) => v.label === attr.label
                                    );
                                    if (childDataArr) {
                                        childDataArr.values = values;
                                        return [...p];
                                    } else {
                                        return [
                                            ...p,
                                            {
                                                label: attr.label,
                                                values,
                                            },
                                        ];
                                    }
                                });
                            }}
                            key={attrIdx}
                            label={attr.label}
                            placeholder="Pick all that you like"
                            data={attr.childAttrs}
                        ></MultiSelect>
                    );
                })}
                {/* product sizes */}
            </SimpleGrid>

            <VariantProducts />
        </BasicSection>
    );
};

const CustomColorItem = forwardRef(({ hex, label, ...others }, ref) => (
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

const CustomColorSelected = ({ hex, label, onRemove, ...others }) => {
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

export default AddProductPage;
