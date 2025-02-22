import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tests: [],
}

const testSlice = createSlice({
    name: "test",
    initialState: initialState,
    reducers: {
        setTests(state, action) {
            state.tests = action.payload;
        },
        addTest(state, action) {
            state.tests = state.tests.push(action.payload);
        },
        removeTest(state, action) {
            state.tests = state.tests.filter(test => test.id !== action.payload)
        },
    }
});

export const { setTests, addTest, removeTest } = testSlice.actions;
export default testSlice.reducer;