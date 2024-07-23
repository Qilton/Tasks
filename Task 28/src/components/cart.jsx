import React from 'react' 
import Item from './items'
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";

import { useSelector, useDispatch } from 'react-redux'
import { push,replace,add,subtract } from '../redux/counter/cartslice'

import { Link } from 'react-router-dom';
const cartlist = (props) => {

    const cart = useSelector((state) => state.carts.cart)
    const items = useSelector((state) => state.carts.items)
    const dispatch = useDispatch()
    const price= useSelector((state)=> state.carts.price)
    const Increment=(e)=>{
          const updatedCart=  cart.map((item=>{
                if (item.id==e){
                        dispatch(add(parseInt(item.price)))
                        return{...item,quantity:item.quantity+1}
                }
                return item
            }))
            dispatch(replace(updatedCart))
    }

    const Decrement=(e)=>{
        const updatedCart=  cart.map((item=>{
              if (item.id==e && item.quantity>0){
                dispatch(subtract(parseInt(item.price)))
                      return{...item,quantity:item.quantity-1}
              }
              return item
          }))
          const filteredCart=updatedCart.filter((item=>item.quantity>0))
          dispatch(replace(filteredCart))
  }

   
  return ( <div className='cart w-1/2 border-2 border-black  rounded-md'>
    <h1 className='text-3xl font-bold text-center'>My Cart</h1>
    {cart.map(item=>{
      return  <div className="row flex justify-around items-center my-10" key={item.id}>
        <img src={item.Img} alt="" className='w-20 object-contain ' />
        <div className="name text-2xl font-bold w-64 text-center">{item.Name}</div>
        <div className="qtnbtns flex gap-2">
              <button className="decrement" onClick={()=>Decrement(item.id)}><IoMdArrowDropleft /> </button>
              <div className="qty" >{item.quantity}</div>
              <button className="increment" onClick={()=>Increment(item.id)}><IoMdArrowDropright /></button>
            </div>
      </div>
    })}
    <div className="font-bold text-3xl text-center my-20">Total Price : ${price}</div>
   <div className='text-center'> <Link to={props.to}><button className='bg-green-500 py-5 px-10 font-bold text-2xl text-white rounded-md'>{props.do}</button></Link></div>
    </div>

  )
}

export default cartlist
