import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSLice"
import userReducer from "./userSlice"
const storee = configureStore({
    reducer : {
        counter : counterReducer,
        user : userReducer
    }
})

export default storee