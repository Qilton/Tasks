import React from 'react' 
import Item from './items'
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";
const cart = () => {
  return (
    <div className='cart w-1/2 border-2 border-black  rounded-md'>
    
      <div className="row flex justify-around items-center my-5">
        <img src="" alt="" />
        <div className="name"></div>
        <div className="qtnbtns">
              <button className="decrement"><IoMdArrowDropleft /> </button>
              <div className="qty" ></div>
              <button className="increment"><IoMdArrowDropright /></button>
            </div>
      </div>
    </div>
  )
}

export default cart
