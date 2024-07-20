import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
const navbar = () => {
    return (<>
    
      <nav className='bg-blue-400 h-12 flex items-center justify-around'>
      <div className="logo text-lg font-bold text-white">Logo</div>
      <div className="home text-lg font-bold text-white cursor-pointer">Home</div>
      <div className="buttons flex gap-5 text-white font-semibold">
       <Link to="/login"><button className='bg-green-500 py-1 px-2 rounded-md'><div className="login">Login</div></button></Link>
       <Link to="/signup"><button className='bg-green-500 py-1 px-2 rounded-md'><div className="signup">Signup</div></button></Link>
      </div>
     </nav>
      <div class="hero flex justify-start gap-32">
      <div class="container w-1/2">
          <div class="left">
              <h1>Revitalive Your</h1>
              <h1>Clothes With Expert</h1>
              <h1 class="blue">Laundry Services!</h1>
          </div>
          <div class="content">
              <p>From Premium dry cleaning to swift wash and fold, we deliver care and convinience. Schedule a pickup and rediscover the freshness of your clothes today!</p>
          </div>
          <div class="button">
              <button>Book a service today!</button>
          </div>
      </div>
      <div class="img">
          <img src="Capture.PNG" alt="Washing Machine"/>
      </div>
  </div>
 
  </>
  )
}

export default navbar
