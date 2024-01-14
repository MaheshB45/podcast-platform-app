/* eslint-disable react-refresh/only-export-components */
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/userSlice";


export default configureStore({
    reducer: {
        user: userReducer,
    },
});