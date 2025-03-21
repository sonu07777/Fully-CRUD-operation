import { configureStore } from "@reduxjs/toolkit";
import Authslice from "../Redux/Slice/AuthSlice.js"

const store = configureStore({
    reducer:{
        auth:Authslice,
    },
    devTools:true,
})

export default store;