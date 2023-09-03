import { createSlice } from "@reduxjs/toolkit";
import { Colors } from "@/Components/fields/colors.mock";
const ColorsWithValue = Colors.map((color) => {
    color.value = color.label.toLowerCase();
    return color;
});
export const BasicSlice = createSlice({
    name: "BasicStore",
    initialState: {
        colors: [...ColorsWithValue],
    },
    reducers: {
        addColor: (state, action) => {
            state.colors.push(action.payload);
        },
        removeColor: (state, action) => {
            const idx = state.colors.findIndex(action.payload);
            state.colors.splice(idx, 1);
        },
    },
});

export const { addColor, removeColor } = BasicSlice.actions;

export default BasicSlice.reducer;
