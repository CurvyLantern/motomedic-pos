import { z } from "zod";
import { useForm, zodResolver } from "@mantine/form";
import { fieldTypes } from "../Fields/ProductFields";
import { productFields } from "@/Components/products/productFields";

const productFormSchema = z.object({
    productName: z
        .string()
        .min(1, { message: "Product name can not be empty" }),
    cateogryId: z.string().nullable(),
    brandId: z.string().nullable(),
    sku: z.string(),
    model: z.string().nullable(),
    color: z.string(),
    tags: z.string(),
    material: z.string(),
    size: z.string(),
    year: z.date(),
    compitibility: z.string(),
    condition: z.string(),
    weight: z.string(),
    quantity: z.number(),
    price: z.number(),
    discount: z.number(),
    discountType: z.string(),
    primaryImg: z.any(),
    thumbImgId: z.string(),
    shortDescription: z.string(),
    availability: z.number(),
    note: z.string(),
    longDescription: z.string(),
    installationMethod: z.string(),
    warranty: z.string(),
    manufacturerPartNumber: z.number(),
    rating: z.number(),
    reviewsId: z.string(),
    status: z.number(),
    productType: z.string(),
    attributesData: z.any(),
    attributeId: z.string(),
    manufacturer: z.string(),
    productCreator: z.string(),
    // minQty: z
    //     .number()
    //     .positive({ message: "min quantity can not be negative" }),
    // barcode: z.string().nullable(),
    // barcodeImg: z.any(),
    // refundable: z.boolean(),
    // description: z.string(),
    // tax: z.number(),
    // productImg: z.any(),
    // colors: z.string(),
    // attrs: z.string(),
    // metaTitle: z.string(),
    // metaDescription: z.string(),
    // metaImg: z.any(),
});
const initialValues = Object.values(productFields)
    .flat(1)
    .reduce((acc, item) => {
        acc[item.name] = item.data;
        return acc;
    }, {});
console.log({ initialValues });

export const useProductForm = () => {
    const form = useForm({
        validate: zodResolver(productFormSchema),
        initialValues: {
            ...initialValues,
        },
    });
    return form;
};
