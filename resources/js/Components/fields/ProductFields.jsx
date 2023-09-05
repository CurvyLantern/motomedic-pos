import { useState } from "react";
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
} from "@mantine/core";
import ImgDropzone from "@/Components/dropzones/ImgDropZone";
import { DescriptionEditor } from "./DescriptionEditor";

export const fieldTypes = {
    number: "number",
    text: "text",
    multiSelect: "multiSelect",
    select: "select",
    dropZone: "dropZone",
    richText: "richText",
    fileButton: "fileButton",
    checkbox: "checkbox",
    textarea: "textarea",
};

const ProductFields = ({ field }) => {
    const [barcodeFile, setBarCodeFile] = useState(null);
    if (field.type === fieldTypes.number) {
        return (
            <div>
                <NumberInput label={field.label} placeholder={field.label} />
            </div>
        );
    }
    if (field.type === fieldTypes.select) {
        return (
            <div>
                <Select
                    label={field.label}
                    placeholder={field.label}
                    data={field.data ? field.data : []}
                />
            </div>
        );
    }
    if (field.type === fieldTypes.richText) {
        return (
            <div>
                <DescriptionEditor />
            </div>
        );
    }
    if (field.type === fieldTypes.dropZone) {
        return (
            <div>
                <ImgDropzone
                    onFileSave={(files) => {
                        console.log({ files });
                    }}
                />
            </div>
        );
    }
    if (field.type === fieldTypes.fileButton) {
        return (
            <Group spacing={"md"}>
                <FileButton
                    onChange={setBarCodeFile}
                    accept="image/png,image/jpeg"
                >
                    {(props) => <Button {...props}>{field.label}</Button>}
                </FileButton>
                {barcodeFile && (
                    <Text size="sm" align="center" mt="sm">
                        Picked file: {barcodeFile.name}
                    </Text>
                )}
            </Group>
        );
    }
    if (field.type === fieldTypes.checkbox) {
        return (
            <div>
                <Checkbox labelPosition="left" label={field.label} />
            </div>
        );
    }
    if (field.type === fieldTypes.textarea) {
        return (
            <div>
                <Textarea label={field.label} />
            </div>
        );
    }

    if (field.type === fieldTypes.multiSelect) {
        const isArr = Array.isArray(field.data);
        return (
            <div>
                <MultiSelect
                    clearButtonProps={{ "aria-label": "Clear selection" }}
                    clearable
                    data={isArr ? field.data : []}
                    label={field.label}
                    placeholder="Pick all that you like"
                />
            </div>
        );
    }
    return (
        <div>
            <TextInput label={field.label} placeholder={field.label} />
        </div>
    );
};

export default ProductFields;
