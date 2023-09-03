import BaseCard from "@/Components/cards/BaseCard";
import ImgDropzone from "@/Components/dropzones/ImgDropZone";
import { Button, Stack, TextInput, Textarea } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { useForm as useMantineForm } from "@mantine/form";
import { useForm as useIntertiaForm, router } from "@inertiajs/react";
import { useState } from "react";
const fields = [
    { label: "Product name" },
    { label: "Product description" },
    { label: "Product Slug" },
    { label: "Product Year" },
    { label: "Product Img" },
];
const TestingPage = () => {
    const [value, setValue] = useState(null);
    const mantineForm = useMantineForm({
        initialValues: {
            modelName: "nasim",
            description: "this is a good product",
            slug: "",
            date: new Date(),
            img: null,
        },
        validate: {
            modelName: () => null,
            description: () => null,
            slug: () => null,
            date: () => null,
            img: () => null,
        },
    });

    const onSubmit = async (values) => {
        console.log(values);

        router.post("/api/product-model-create", values, {
            forceFormData: true,
            onSuccess: (s) => {
                console.log({ s });
            },
        });
    };
    return (
        <form onSubmit={mantineForm.onSubmit(onSubmit)}>
            <Stack>
                <BaseCard>
                    <TextInput
                        {...mantineForm.getInputProps("modelName")}
                        label={fields[0].label}
                    />
                </BaseCard>
                <BaseCard>
                    <Textarea
                        label={fields[1].label}
                        {...mantineForm.getInputProps("description")}
                    />
                </BaseCard>
                <BaseCard>
                    <TextInput
                        label={fields[2].label}
                        {...mantineForm.getInputProps("slug")}
                    />
                </BaseCard>
                <BaseCard>
                    <DatePickerInput
                        label="Pick date"
                        placeholder="Pick date"
                        value={value}
                        onChange={setValue}
                        {...mantineForm.getInputProps("date")}
                    />
                </BaseCard>
                <BaseCard title={fields[4].label}>
                    <ImgDropzone
                        onFileSave={(files) => {
                            mantineForm.setFieldValue("img", files);
                        }}
                    />
                </BaseCard>

                <Button type="submit">Submit</Button>
            </Stack>
        </form>
    );
};

export default TestingPage;
