import { configureStore } from "@reduxjs/toolkit";
import ServiceReducer from "./Slices/ServiceSlice";
import BasicReducer from "./Slices/BasicSlice";
import ProductReducer from "./Slices/ProductSlice";
import CustomerReducer from "./Slices/CustomerSlice";
export default configureStore({
    reducer: {
        service: ServiceReducer,
        basic: BasicReducer,
        product: ProductReducer,
        customer: CustomerReducer,
    },
});
