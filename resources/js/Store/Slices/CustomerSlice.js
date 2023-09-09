import { createSlice } from "@reduxjs/toolkit";

// const randStr = () => {
//     const al = "abcdefghijklmnopqrstuvwxyz";

//     const len = Math.floor(Math.random() * (al.length - 5)) + 5;
//     let char = "";
//     for (let i = 0; i <= len; i++) {
//         char += al[Math.floor(Math.random() * al.length)];
//     }
//     return char;
// };
let id = 1;
class Customer {
    constructor() {
        const _id = id++;
        const _name = `User-${_id}`;
        const _phone = Math.floor(Math.random() * 10000000 + 500000);
        // Math.floor(Math.random() * 10000000 + 500000)
        this.id = _id;
        this.name = _name;
        this.label = _name;
        this.value = _id;
        this.phone = _phone;
        this.email = `${_name}@gmail.com`;
        this.address = "13 b north western housing";
    }
}
const temp = Array.from({ length: 100 }, () => new Customer());

export const CustomerSlice = createSlice({
    name: "BasicStore",
    initialState: {
        selectedCustomer: null,
        customers: [...JSON.parse(JSON.stringify(temp))],
    },
    reducers: {
        // action.payload = {id,value}
        updateCustomerByIdOrValue: (state, action) => {
            const { id, value } = action.payload;
            const customer = state.customers.find((customer) => {
                if (id) {
                    return customer.id === id;
                } else if (value) {
                    return customer.value === value;
                }
            });
            if (customer) {
                state.selectedCustomer = JSON.parse(JSON.stringify(customer));
            } else {
                state.selectedCustomer = null;
            }
        },
    },
});

export const { updateCustomerByIdOrValue } = CustomerSlice.actions;

export default CustomerSlice.reducer;
