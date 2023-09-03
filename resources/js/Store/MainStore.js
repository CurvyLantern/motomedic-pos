import { configureStore } from "@reduxjs/toolkit";
import ServiceReducer from "./Slices/ServiceSlice";
import BasicReducer from "./Slices/BasicSlice";
import ProductReducer from "./Slices/ProductSlice";
export default configureStore({
    reducer: {
        service: ServiceReducer,
        basic: BasicReducer,
        product: ProductReducer,
    },
});
