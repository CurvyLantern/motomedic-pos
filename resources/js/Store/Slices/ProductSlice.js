import { createSlice } from "@reduxjs/toolkit";

export const ProductSlice = createSlice({
    name: "ProductStore",
    initialState: {
        discountType: [
            {
                label: "Flat",
                value: "flat",
            },
            {
                label: "Percentage",
                value: "prcnt",
            },
        ],
        attributes: [
            {
                label: "Size",
                value: "size",
                childAttrs: [
                    { label: "M", value: "M" },
                    { label: "L", value: "L" },
                    { label: "XL", value: "XL" },
                ],
            },
            {
                label: "Fabric",
                value: "fabric",
                childAttrs: [
                    { label: "Silk", value: "silk" },
                    { label: "Lilen", value: "lilen" },
                ],
            },
        ],
    },
    reducers: {},
});

// export const { addType, removeType } = ProductSlice.actions;

export default ProductSlice.reducer;
