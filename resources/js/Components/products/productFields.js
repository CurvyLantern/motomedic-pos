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
            name: "cateogryId",
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
            name: "sku",
            label: "SKU",
            type: fieldTypes.text,
            data: "",
        },
        {
            name: "model",
            label: "Model",
            type: fieldTypes.text,
            data: "",
        },
        {
            name: "color",
            label: "Color",
            type: fieldTypes.select,
            data: [],
        },
        {
            name: "tags",
            label: "Tags",
            type: fieldTypes.text,
            data: "",
        },
        {
            name: "material",
            label: "Material",
            type: fieldTypes.text,
            data: "",
        },
        {
            name: "size",
            label: "Size",
            type: fieldTypes.text,
            data: "",
        },

        {
            name: "compitibility",
            label: "Compitibility",
            type: fieldTypes.text,
            data: "",
        },
        {
            name: "condition",
            label: "Condition",
            type: fieldTypes.text,
            data: "",
        },
        {
            name: "weight",
            label: "Weight",
            type: fieldTypes.text,
            data: "",
        },
        {
            name: "quantity",
            label: "Quantity",
            type: fieldTypes.number,
            data: 10,
        },
        {
            name: "price",
            label: "Price",
            type: fieldTypes.number,
            data: 10,
        },
        {
            name: "discount",
            label: "Discount",
            type: fieldTypes.number,
            data: 10,
        },
        //
        // start
        //
        //
        {
            name: "discountType",
            label: "Discount Type",
            type: fieldTypes.select,
            data: [
                { value: "1", label: "flat" },
                { value: "2", label: "prcnt" },
            ],
        },
        {
            name: "primaryImg",
            label: "Primary Img",
            type: fieldTypes.fileButton,
            data: null,
        },
        //
        {
            name: "thumbImgId",
            label: "ThumbImg Id",
            type: fieldTypes.text,
            data: "",
        },
        {
            name: "shortDescription",
            label: "Short Description",
            type: fieldTypes.textarea,
            data: "",
        },

        {
            name: "note",
            label: "Note",
            type: fieldTypes.text,
            data: "",
        },
        {
            name: "longDescription",
            label: "Long Description",
            type: fieldTypes.textarea,
            data: "",
        },
        {
            name: "installationMethod",
            label: "Installation Method",
            type: fieldTypes.textarea,
            data: "",
        },
        {
            name: "warranty",
            label: "Warranty",
            type: fieldTypes.text,
            data: "",
        },
        {
            name: "manufacturerPartNumber",
            label: "Manufacturer PartNumber",
            type: fieldTypes.text,
            data: "",
        },
        {
            name: "rating",
            label: "Rating",
            type: fieldTypes.number,
            data: 0,
        },
        {
            name: "reviewsId",
            label: "Reviews Id",
            type: fieldTypes.number,
            data: 0,
        },

        {
            name: "productType",
            label: "Product Type",
            type: fieldTypes.text,
            data: "",
        },
        {
            name: "attributesData",
            label: "Attributes Data",
            type: fieldTypes.text,
            data: "",
        },
        {
            name: "attributesData",
            label: "Attributes Data",
            type: fieldTypes.text,
            data: "",
        },
        {
            name: "attributeId",
            label: "Attributes Id",
            type: fieldTypes.number,
            data: 0,
        },
        {
            name: "manufacturer",
            label: "Manufacturer",
            type: fieldTypes.text,
            data: "",
        },
        {
            name: "productCreator",
            label: "Product Creator",
            type: fieldTypes.text,
            data: "",
        },
        {
            name: "availability",
            label: "Availability",
            type: fieldTypes.checkbox,
            data: true,
        },
        {
            name: "status",
            label: "Status",
            type: fieldTypes.checkbox,
            data: true,
        },
        {
            name: "year",
            label: "Year",
            type: fieldTypes.yearPicker,
            data: new Date(),
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
