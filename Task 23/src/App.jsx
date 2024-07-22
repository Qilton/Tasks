import { useState } from 'react'
import "./App.css"
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";

function App() {
const[disable,setdisable]= useState(false)

  const [price, setprice] = useState(0)
  const [cart, setcart] = useState([])

  const items = [{

    Img: "Nike.jpg",
    Name: "Nike Shoe",
    price: 250 + "$",
    quantity: 0,
    id: 1
  },
  {
    Img: "Vans Sneakers.jpg",
    Name: "Vans Shoe",
    price: 100 + "$",
    quantity: 0,
    id: 2
  },
  {
    Img: "Adidas.jpg",
    Name: "Adidas Sneaker",
    price: 200+" $",
    quantity: 0,
    id: 3
  },
  {
    "Img": "Puma.jpg",
    "Name": "Puma Running Shoe",
    "price": "150 $",
    "quantity": 0,
    "id": 4
  },
  {
    "Img": "Reebok.jpg",
    "Name": "Reebok Classic",
    "price": "180 $",
    "quantity": 0,
    "id": 5
  },
  {
    "Img": "NewBalance.jpg",
    "Name": "New Balance Sneaker",
    "price": "170 $",
    "quantity": 0,
    "id": 6
  },
  {
    "Img": "UnderArmour.jpg",
    "Name": "Under Armour Trainer",
    "price": "190 $",
    "quantity": 0,
    "id": 7
  },
 
  {
    "Img": "Converse.jpg",
    "Name": "Converse Chuck Taylor",
    "price": "130 $",
    "quantity": 0,
    "id": 8
  },
  {
    "Img": "Asics.jpg",
    "Name": "Asics Gel Nimbus",
    "price": "220 $",
    "quantity": 0,
    "id": 9
  },
  {
    "Img": "Skechers.jpg",
    "Name": "Skechers Memory Foam",
    "price": "140 $",
    "quantity": 0,
    "id": 10
  }
  ]
  const HandleAdd = (e) => {
    const id = parseInt(e.target.name);
    const itemToAdd = items.find(item => item.id === id);

        
   {if (itemToAdd) {
    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
      
      const updatedCart = cart.map(item => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setcart(updatedCart);
    } else {

      setcart([...cart, { ...itemToAdd, quantity: 1 }]);
    }

    setprice(price + parseInt(itemToAdd.price));
      
    }}
  

  };


  const Increment = (id) => {
    const updatedCart = cart.map(item => {
      if (item.id === id) {
        setprice(price + parseInt(item.price))
        return { ...item, quantity: item.quantity + 1 };

      }
      return item;
    });
    setcart(updatedCart);
  };

  const Decrement = (id) => {
    const updatedCart = cart.map(item => {
      if (item.id === id && item.quantity > 0) {
        setprice(price - parseInt(item.price))
        return { ...item, quantity: item.quantity - 1 };
      }

      return item;
    });
    const filteredCart = updatedCart.filter(item => item.quantity > 0);

    setcart(filteredCart);

  };


  return (
    <div className='container'>
      <div className="display">

        {items.map(item => {
          return <div className="item" key={item.id}>
            <img className="Shoe" src={item.Img} alt="" />

            <h1>{item.Name}</h1>
            <p className='Price'>{item.price}</p>
            <button className='Add' name={item.id} onClick={HandleAdd}>Add to Cart</button>
          </div>
        })}

      </div>
      <div className="cart">
        <h1 className='head'>Cart</h1>
        {cart.map(item => {
          return <div className="row" key={item.id}>
           <div> <img src={item.Img} alt="" className='cartimg' /></div>
            <div className='Name'>{item.Name}</div>
            <div>{item.price}</div>
            <div className="qtnbtns">
              <button className="decrement" onClick={() => { Decrement(item.id) }}><IoMdArrowDropleft /> </button>
              <div className="qty" >{item.quantity}</div>
              <button className="increment" onClick={() => { Increment(item.id) }}><IoMdArrowDropright /></button>
            </div>
          </div>
        })}
        <div className="price">Total Price: ${price}</div>
      </div>
    </div>

  )
}

export default App
