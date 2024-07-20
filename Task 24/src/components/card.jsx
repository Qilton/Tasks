import React from "react"
import { useState } from "react"
import "./card.css"



const card = (props) => {
  return (
    <div className="card">
          <img className="Shoe" src={props.img} alt="" />

          <h1>{props.name}</h1>
          <p className='desc'>{props.desc}</p>
        
          
        </div>
  )
}

export default card
