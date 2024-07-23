import { createSlice } from '@reduxjs/toolkit'
import items from '../../components/items';
const initialState = {
    cart:[],
    items: items,
    price:0
}

export const cartSlice = createSlice({
  name: 'carts',
  initialState,
  reducers: {
    push: (state, action) => {
        state.cart.push(action.payload);
      },
      replace:(state,action)=>{
        state.cart=action.payload
      },
      add:(state,action) => {
        state.price+= action.payload
      },
      subtract:(state,action) => {
        state.price-= action.payload
      }
   
  },
})

// Action creators are generated for each case reducer function
export const {push,replace,add,subtract} = cartSlice.actions;

export default cartSlice.reducer;