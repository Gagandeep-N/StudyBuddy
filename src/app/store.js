import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import testReducer from "../features/test/testSlice";


const store = configureStore({
    reducer: {
        auth: authReducer,
        test: testReducer,
    }
});


export default store;