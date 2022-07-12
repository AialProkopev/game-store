import { configureStore } from "@reduxjs/toolkit";
import { gamesApi } from "./rawg.api";

export const store = configureStore({
    reducer: {[gamesApi.reducerPath]: gamesApi.reducer}
    
})

export type TypeRootState = ReturnType<typeof store.getState>