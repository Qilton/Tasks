import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
const navbar = () => {
    return (<>
    
      <nav className='bg-blue-400 h-12 flex items-center justify-around'>
      <div className="logo text-lg font-bold text-white">Logo</div>
      <Link to="/"><div className="home text-lg font-bold text-white cursor-pointer">Home</div></Link>
      <div className="buttons flex gap-5 text-white font-semibold">
       <Link to="/login"><button className='bg-green-500 py-1 px-2 rounded-md'><div className="login">Login</div></button></Link>
       <Link to="/signup"><button className='bg-green-500 py-1 px-2 rounded-md'><div className="signup">Signup</div></button></Link>
      </div>
     </nav>
    
 
  </>
  )
}

export default navbar
