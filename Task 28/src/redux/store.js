import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../redux/counter/cartslice'
export const store = configureStore({
  reducer: {
    carts:cartReducer
  },
})