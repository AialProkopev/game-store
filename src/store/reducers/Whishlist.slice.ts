import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { GameType } from "src/types/Game.type";

interface WhishlistState {
    whishlist : Array<GameType>
}

const initialState:WhishlistState = {
    whishlist : []
}

const whishlistSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToWhishlist: (state, action: PayloadAction<GameType>) => {
            state.whishlist.push(action.payload)
        },
        removeItemFromWhishlist: (state, action: PayloadAction<number>) => {
            state.whishlist = state.whishlist.filter((item)=>item.id != action.payload)
        }
        
    }
})

export const {
    addToWhishlist,
    removeItemFromWhishlist
} = whishlistSlice.actions;

export const whishlistReducer = whishlistSlice.reducer;