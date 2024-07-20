import React from 'react'
import Navbar from './navbar'
const home = () => {
  return (
    <>
    <Navbar/>
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

export default home
