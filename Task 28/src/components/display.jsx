import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { push,replace,add} from '../redux/counter/cartslice'

const display = () => {
 const cart = useSelector((state) => state.carts.cart)
    const items = useSelector((state) => state.carts.items)
    const dispatch = useDispatch()


    const HandleAdd=(e) => {
        const itemtoadd=items.find(item=>e==item.id)
        if (itemtoadd){
            const exisitingitem=cart.find(item=>e==item.id)
            if(exisitingitem){
              const updatedCart=  cart.map((item=>{
                  if (item.id==e){
                    dispatch(add(parseInt(itemtoadd.price)))
                          return{...item,quantity:item.quantity+1}
                  }
                  return item
              }))
              dispatch(replace(updatedCart))
          }
          else{
                 dispatch(push({...itemtoadd,quantity:1}))
                  console.log(cart)
                  dispatch(add(parseInt(itemtoadd.price)))
          }
        }
      }

    return (
    
            <div className="display flex flex-wrap gap-20 w-1/2">

                {items.map(item => {
                    return <div className="item border-2 border-black rounded-md p-5 w-96 flex flex-col justify-center gap-2" key={item.id}>
                        <img className="Shoe h-56 object-contain rounded-md " src={item.Img} alt="" />

                        <h1 className='text-xl font-bold text-center' >{item.Name}</h1>
                        <p className='text-xl font-bold text-center'>{item.price}</p>
                        <button className='Add bg-green-500 text-white rounded-lg p-5 text-lg font-bold' onClick={() => HandleAdd(item.id)}>Add to Cart</button>
                    </div>
                })}

            </div>
       
    )
}

export default display
