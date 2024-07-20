import React from 'react'

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

const cart = () => {
  return (
    <div>
      <div className="cart">
        <h1 className='head'>Cart</h1>
        {cart.map(item=>{
          <div className="row">
            <img src={item.Img} alt="" className='cartimg' />
            <div>{item.Name}</div>
            <div>{item.price}</div>
          </div>
        })}
        
      </div>
    </div>
  )
}

export default cart
