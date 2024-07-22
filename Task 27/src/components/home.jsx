import React from 'react'
import Navbar from './navbar'
import Display from './display'
import { useState } from 'react'
import { useContext,counterContext } from './context'
import Cart from './cart'

const home = () => {
    const [cart, setcart] = useState([]);
  return (
    <counterContext.Provider value={{cart,setcart}}>
    <>
   <Navbar/>
   <div className="container flex w-full justify-between m-20 ">
        <Display/>
        <Cart/>
   </div>
   </>
   </counterContext.Provider>
  )
}

export default home
