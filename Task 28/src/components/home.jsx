import React from 'react'
import Navbar from './navbar'
import Display from './display'
import Cart from './cart'
import { useSelector, useDispatch } from 'react-redux'

const home = () => {
    const cart = useSelector((state) => state.carts.cart)
    console.log(cart)
  return (
      <>
   
   <Navbar/>
   <div className=" flex w-[95vw] mx-auto justify-between my-20  ">
        <Display/>
        <Cart to="/payment" do="Proceed to Payment"/>
   </div>

   </>
  )
}

export default home