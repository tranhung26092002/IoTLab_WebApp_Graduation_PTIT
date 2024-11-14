import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserReducer";

export const store = configureStore({
    reducer: {
        UserReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>

export type DispatchType = typeof store.dispatch