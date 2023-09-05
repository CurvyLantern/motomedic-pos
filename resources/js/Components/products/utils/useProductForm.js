import { z } from "zod";
import { useForm, zodResolver } from "@mantine/form";
import { fieldTypes } from "../Fields/ProductFields";
import { productFields } from "@/Components/products/productFields";

const productFormSchema = z.object({
    productName: z
        .string()
        .min(1, { message: "Product name can not be empty" }),
    category: z.string().nullable(),
    subCategory: z.string().nullable(),
    brand: z.string().nullable(),
    unit: z.string().nullable(),
    sku: z.string().nullable(),
    qty: z.number().positive({ message: "quantity can not be negative" }),
    minQty: z
        .number()
        .positive({ message: "min quantity can not be negative" }),
    barcode: z.string().nullable(),
    // barcodeImg: z.any(),
    refundable: z.boolean(),
    description: z.string(),
    tax: z.number(),
    discount: z.string(),
    price: z.number(),
    // productImg: z.any(),
    // colors: z.string(),
    // attrs: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
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
