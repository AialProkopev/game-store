import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { GameType } from "src/types/Game.type";

interface CartState {
    cart : Array<GameType>
}

const initialState:CartState = {
    cart : []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<GameType>) => {
            state.cart.push(action.payload)
        },
        removeItemFromCart: (state, action: PayloadAction<number>) => {
            state.cart = state.cart.filter((item)=>item.id != action.payload)
        }
        
    }
})

export const {
    addToCart,
    removeItemFromCart
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;