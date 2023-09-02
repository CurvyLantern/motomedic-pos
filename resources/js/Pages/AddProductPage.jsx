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
} from "@mantine/core";
import { RichTextEditor, Link } from "@mantine/tiptap";
import { useEditor } from "@tiptap/react";
import Highlight from "@tiptap/extension-highlight";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Superscript from "@tiptap/extension-superscript";
import SubScript from "@tiptap/extension-subscript";
import ImgDropzone from "@/Components/dropzones/ImgDropZone";
import { useState } from "react";

const fields = {
    basicInfo: [
        {
            label: "Product Name",
            type: "text",
        },
        {
            label: "Category",
            type: "select",
        },
        {
            label: "Sub Category",
            type: "select",
            data: [
                { value: "1", label: "hero honda 1" },
                { value: "2", label: "hero honda 2" },
                { value: "3", label: "hero honda 3" },
                { value: "4", label: "hero honda 4" },
            ],
        },
        {
            label: "Brand",
            type: "select",
            data: [
                { value: "1", label: "hero honda 1" },
                { value: "2", label: "hero honda 2" },
                { value: "3", label: "hero honda 3" },
                { value: "4", label: "hero honda 4" },
            ],
        },
        {
            label: "Unit",
            type: "Select",
        },
        {
            label: "SKU",
            type: "text",
        },
        {
            label: "Quantity",
            type: "number",
        },
        {
            label: "Minimum purchase qty",
            type: "number",
        },
    ],
    extraInfos: [
        {
            label: "Barcode",
            type: "text",
        },
        {
            label: "Upload barcode image",
            type: "fileButton",
        },
        {
            label: "Refundable",
            type: "checkbox",
        },
    ],
    desc: [
        {
            label: "Description",
            type: "richText",
        },
    ],
    formals: [
        {
            label: "Tax",
            type: "number",
        },
        {
            label: "Discount Type",
            type: "select",
        },
        {
            label: "Price",
            type: "number",
        },
        {
            label: "Status",
            type: "select",
        },
    ],
    img: [
        {
            label: "Product Image",
            type: "dropzone",
        },
    ],
};

const useStyles = createStyles((theme) => ({
    paper: {
        backgroundColor: theme.fn.lighten(theme.colors.primary.background, 0.9),
        height: "100%",
    },
    title: {
        fontWeight: 600,
        fontSize: theme.fontSizes.lg,
        paddingTop: theme.spacing.lg,
        paddingBottom: theme.spacing.lg,
    },
}));

const Field = ({ field }) => {
    const [barcodeFile, setBarCodeFile] = useState(null);
    if (field.type === "number") {
        return (
            <div>
                <NumberInput label={field.label} placeholder={field.label} />
            </div>
        );
    }
    if (field.type === "select") {
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
    if (field.type === "richText") {
        return (
            <div>
                <DescriptionEditor />
            </div>
        );
    }
    if (field.type === "dropzone") {
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
    if (field.type === "fileButton") {
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
    if (field.type === "checkbox") {
        return (
            <div>
                <Checkbox labelPosition="left" label={field.label} />
            </div>
        );
    }
    return (
        <div>
            <TextInput label={field.label} placeholder={field.label} />
        </div>
    );
};
const MyPaper = ({ title, children }) => {
    const { classes, cx } = useStyles();

    return (
        <Paper className={cx(classes.paper)} shadow="xs" radius="xs" p="sm">
            <Text component="p" className={cx(classes.title)}>
                {title}
            </Text>
            {children}
        </Paper>
    );
};
const AddProductPage = () => {
    const infoFields = fields.basicInfo.map((field, fieldIdx) => {
        return <Field field={field} key={fieldIdx} />;
    });
    const extraInfoFiels = fields.extraInfos.map((field, fieldIdx) => {
        return <Field field={field} key={fieldIdx} />;
    });
    const descFields = fields.desc.map((field, fieldIdx) => {
        return <Field field={field} key={fieldIdx} />;
    });
    const formalFields = fields.formals.map((field, fieldIdx) => {
        return <Field field={field} key={fieldIdx} />;
    });
    const imgFields = fields.img.map((field, fieldIdx) => {
        return <Field field={field} key={fieldIdx} />;
    });
    return (
        <Stack>
            <MyPaper title="Basic Info">
                <SimpleGrid cols={4}>{infoFields}</SimpleGrid>
            </MyPaper>

            <MyPaper title="Product Description">
                <SimpleGrid cols={1}>{descFields}</SimpleGrid>
            </MyPaper>
            <MyPaper title="Tax Fields">
                <SimpleGrid cols={4}>{formalFields}</SimpleGrid>
            </MyPaper>
            <MyPaper title="Extra Info">
                <SimpleGrid cols={1}>{extraInfoFiels}</SimpleGrid>
            </MyPaper>
            <MyPaper title="Image of Product">
                <SimpleGrid cols={1}>{imgFields}</SimpleGrid>
            </MyPaper>
            <MyPaper>
                <Group>
                    <Button size="lg">Submit</Button>
                    <Button size="lg">Cancel</Button>
                </Group>
            </MyPaper>
        </Stack>
    );
};

const content =
    '<h2 style="text-align: center;">Please Give a meaningfull description to the product</h2><ul><li>General text formatting: <strong>bold</strong>, <em>italic</em>, <u>underline</u>, <s>strike-through</s> </li><li>Headings (h1-h6)</li><li>Sub and super scripts (<sup>&lt;sup /&gt;</sup> and <sub>&lt;sub /&gt;</sub> tags)</li><li>Ordered and bullet lists</li><li>Text align&nbsp;</li></ul>';

const DescriptionEditor = ({ label, type, placeholder }) => {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
            Link,
            Superscript,
            SubScript,
            Highlight,
            TextAlign.configure({ types: ["heading", "paragraph"] }),
        ],
        content,
    });

    return (
        <RichTextEditor editor={editor}>
            <RichTextEditor.Toolbar sticky stickyOffset={60}>
                <RichTextEditor.ControlsGroup>
                    <RichTextEditor.Bold />
                    <RichTextEditor.Italic />
                    <RichTextEditor.Underline />
                    <RichTextEditor.Strikethrough />
                    <RichTextEditor.ClearFormatting />
                    <RichTextEditor.Highlight />
                    <RichTextEditor.Code />
                </RichTextEditor.ControlsGroup>

                <RichTextEditor.ControlsGroup>
                    <RichTextEditor.H1 />
                    <RichTextEditor.H2 />
                    <RichTextEditor.H3 />
                    <RichTextEditor.H4 />
                </RichTextEditor.ControlsGroup>

                <RichTextEditor.ControlsGroup>
                    <RichTextEditor.Blockquote />
                    <RichTextEditor.Hr />
                    <RichTextEditor.BulletList />
                    <RichTextEditor.OrderedList />
                    <RichTextEditor.Subscript />
                    <RichTextEditor.Superscript />
                </RichTextEditor.ControlsGroup>

                <RichTextEditor.ControlsGroup>
                    <RichTextEditor.Link />
                    <RichTextEditor.Unlink />
                </RichTextEditor.ControlsGroup>

                <RichTextEditor.ControlsGroup>
                    <RichTextEditor.AlignLeft />
                    <RichTextEditor.AlignCenter />
                    <RichTextEditor.AlignJustify />
                    <RichTextEditor.AlignRight />
                </RichTextEditor.ControlsGroup>
            </RichTextEditor.Toolbar>

            <RichTextEditor.Content />
        </RichTextEditor>
    );
};
export default AddProductPage;
