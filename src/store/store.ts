import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { gamesApi } from "../services/rawg.api";

export const store = () => configureStore({
    reducer: {
        [gamesApi.reducerPath]: gamesApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(gamesApi.middleware),
})

export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore["dispatch"];
export type RootState = ReturnType<AppStore["getState"]>;

export const wrapper = createWrapper<AppStore>(store, { debug: true });