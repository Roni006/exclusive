import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: JSON.parse(localStorage.getItem('cart')) || []
}

const cartSlice  = createSlice({
    name:'cart',
    initialState,
    reducers: {
        addToCart:(state, action) => {
            const item = action.payload
            const existing = state.items.find(i => i.id === item.id)

            if(existing){
                existing.quantity += item.quantity
            }
            else{
                state.items.push(item)
            }
            localStorage.setItem('cart', JSON.stringify(state.items))
        }, 
    }
})

export const { addToCart } = cartSlice.actions

export default cartSlice.reducer