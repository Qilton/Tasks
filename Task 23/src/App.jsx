import { useState } from 'react'
import "./App.css"
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";

function App() {

const[qty,setQty]=useState([])
  
  const [cart, setcart] = useState([])

  const items = [{

    Img: "Nike.jpg",
    Name: "Nike Shoe",
    price: 250 + "$",
    id: 1
  },
  {
    Img: "Vans Sneakers.jpg",
    Name: "Vans Shoe",
    price: 100 + "$",
    id: 2
  },
  {
    Img: "Nike.jpg",
    Name: "Nike Shoe",
    price: 250 + "$",
    id: 3
  },
  {
    Img: "Nike.jpg",
    Name: "Nike Shoe",
    price: 250 + "$",
    id: 4
  },
  {
    Img: "Nike.jpg",
    Name: "Nike Shoe",
    price: 250 + "$",
    id: 5
  },
  {
    Img: "Nike.jpg",
    Name: "Nike Shoe",
    price: 250 + "$",
    id: 6
  },
  ]
const HandleAdd=(e) => {
  let id=e.target.name
 
    items.forEach(e=>{
        if (id==e.id){
     
         setcart([...cart,e])

        }
    })
}


const Increment=(e) => {
    
  items.forEach(item=>{
    if (e.id==item.id){
 
            setQty(...qty,qty[e]+1)

    }
})
}
const Decrement=(e) => {
  
}



  return (
     <div className='container'>
      <div className="display">

      {items.map(item=>{
  return  <div className="item" key={item.id}>
          <img className="Shoe" src={item.Img} alt="" />

          <h1>{item.Name}</h1>
          <p className='Price'>{item.price}</p>
          <button className='Add' name={item.id}  onClick={HandleAdd}>Add to Cart</button>
        </div>})}

      </div>
      <div className="cart">
        <h1 className='head'>Cart</h1>
        {cart.map(item=>{
         return  <div className="row" key={item.id}>
            <img src={item.Img} alt="" className='cartimg' />
            <div>{item.Name}</div>
            <div>{item.price}</div>
            <div className="qtnbtns">
              <button className="decrement" name={item.id} onClick={()=>{Decrement(item.id)}}><IoMdArrowDropleft /> </button>
              <div className="qty" >{qty[item.id]}</div>
              <button className="increment" onClick={()=>{Increment(item.id)}}><IoMdArrowDropright /></button>
            </div>
          </div>
        })}
        
      </div>
    </div>

  )
}

export default App
