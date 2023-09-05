import { fieldTypes } from "@/Components/products/Fields/ProductFields";
export const productFields = {
    basicInfo: [
        {
            label: "Product Name",
            type: fieldTypes.text,
            name: "productName",
            data: "",
        },
        {
            label: "Category",
            type: fieldTypes.select,
            name: "categoryId",
            data: [
                { value: "1", label: "hero honda 1" },
                { value: "2", label: "hero honda 2" },
                { value: "3", label: "hero honda 3" },
                { value: "4", label: "hero honda 4" },
            ],
        },
        {
            name: "subCategory",
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
            name: "brandId",
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
            name: "unit",
            label: "Unit",
            type: fieldTypes.select,
            data: [
                { value: "1", label: "kg" },
                { value: "2", label: "ltr" },
            ],
        },
        {
            name: "sku",
            label: "SKU",
            type: fieldTypes.text,
            data: "",
        },
        {
            name: "qty",
            label: "Quantity",
            type: fieldTypes.number,
            data: 30,
        },
        {
            name: "minQty",
            label: "Minimum purchase qty",
            type: fieldTypes.number,
            data: 5,
        },
    ],
    extraInfos: [
        {
            name: "barcode",
            label: "Barcode",
            type: fieldTypes.text,
            data: "",
        },
        {
            name: "barcodeImg",
            label: "Upload barcode image",
            type: fieldTypes.fileButton,
            data: undefined,
        },
        {
            name: "refundable",
            label: "Refundable",
            type: fieldTypes.checkbox,
            data: false,
        },
    ],
    desc: [
        {
            name: "description",
            label: "Description",
            type: fieldTypes.richText,
            data: "",
        },
    ],
    formals: [
        {
            name: "tax",

            label: "Tax",
            type: fieldTypes.number,
            data: 0,
        },
        {
            name: "discount",
            label: "Discount Type",
            type: fieldTypes.select,
            data: [
                { value: "1", label: "flat" },
                { value: "2", label: "prcnt" },
            ],
        },
        {
            name: "price",
            label: "Price",
            type: fieldTypes.number,
            data: 0,
        },
    ],
    img: [
        {
            name: "productImg",
            label: "Product Image",
            type: fieldTypes.dropZone,
            data: null,
        },
    ],
    variation: [
        {
            name: "colors",
            label: "Colors",
            type: fieldTypes.multiSelect,
            data: [],
        },
        {
            name: "attrs",
            label: "Attributes",
            type: fieldTypes.multiSelect,
            data: [],
        },
        {
            name: "size",
            label: "Size",
            type: fieldTypes.multiSelect,
            data: [],
        },
    ],
    seoTag: [
        {
            name: "metaTitle",
            label: "Meta Title",
            type: fieldTypes.text,
            data: "",
        },
        {
            name: "metaDescription",
            label: "Meta Description",
            type: fieldTypes.textarea,
            data: "",
        },
        {
            name: "metaImg",
            label: "Meta Image",
            type: fieldTypes.fileButton,
            data: null,
        },
    ],
    sellInfo: [
        {
            name: "price",
            label: "Product Price",
            type: fieldTypes.number,
            data: 100,
        },
        {
            name: "productColor",
            label: "Product Color",
            type: fieldTypes.select,
            data: [],
        },
    ],
};
