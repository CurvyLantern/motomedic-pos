import { MultiSelect, SimpleGrid, Stack, Switch } from "@mantine/core";

import VariantProducts from "@/Components/products/VariantProducts";
import BasicSection from "@/Components/sections/BasicSection";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CustomColorSelected, CustomColorItem } from "./MultiSelectColorItems";
import { generateProductVariationCombinations } from "@/Components/products/utils/generateProductVariationCombinations";
import { createVariant } from "@/Store/Slices/ProductSlice";

export const ProductVariationFields = () => {
    const dispatch = useDispatch();
    const availableColors = useSelector((state) => state.basic.colors);
    const availableAttrs = useSelector((state) => state.product.attributes);
    const attrInputData = useMemo(() => {
        return availableAttrs.map(({ label, value }) => ({ label, value }));
    }, [availableAttrs]);

    const [selectedAttrsValue, setSelectedAttrsValue] = useState([]);

    const selectedAttrs = useMemo(() => {
        return availableAttrs.filter((attrs) => {
            return selectedAttrsValue.includes(attrs.value);
        });
    }, [availableAttrs, selectedAttrsValue]);
    // child Attrs values
    const [selectedChildAttrs, setSelectedChildAttrs] = useState([]);
    const [selectedColorValues, setSelectedColorValues] = useState([]);
    const [variantDataArr, setVariantDataArr] = useState([]);

    const colorInputData = availableColors;

    useEffect(() => {
        console.log({ selectedAttrs });
    }, [selectedAttrs]);

    useEffect(() => {
        const total = [];
        console.log(selectedChildAttrs, " selected childAttrs ");
        selectedColorValues.forEach((color) => {
            const output = generateProductVariationCombinations({
                colors: color,
                attrs: selectedChildAttrs,
                attrSelector: "values",
            });
            console.log({ output });
            total.push(...output);
        });

        dispatch(createVariant(total));

        console.log({ total }, "from use Effect");
    }, [selectedColorValues, selectedChildAttrs]);
    const [isVariationEnabled, setIsVariationEnabled] = useState(false);
    const isFormDisabled = !isVariationEnabled;
    return (
        <BasicSection title="Product Variation">
            <Stack>
                <Switch
                    onChange={(e) =>
                        setIsVariationEnabled(e.currentTarget.checked)
                    }
                    label="Enable Variations"
                    labelPosition="left"
                ></Switch>
                <SimpleGrid cols={2}>
                    {/* product colors */}
                    <MultiSelect
                        disabled={isFormDisabled}
                        valueComponent={CustomColorSelected}
                        itemComponent={CustomColorItem}
                        label="Colors"
                        placeholder="Pick all that you like"
                        data={colorInputData}
                        onChange={(colorValues) => {
                            setSelectedColorValues(colorValues);
                        }}
                    ></MultiSelect>

                    {/* product attributes */}
                    <MultiSelect
                        onChange={(value) => {
                            setSelectedAttrsValue(value);
                        }}
                        disabled={isFormDisabled}
                        label="Attributes"
                        placeholder="Pick all that you like"
                        data={attrInputData}
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

                {isFormDisabled ? null : <VariantProducts />}
            </Stack>
        </BasicSection>
    );
};
