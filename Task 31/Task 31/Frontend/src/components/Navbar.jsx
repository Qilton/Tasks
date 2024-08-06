import React from 'react'

const Navbar = () => {
  return (
   
      <nav>
        <ul className='flex list-none gap-20 bg-purple-500 text-white font-medium justify-between h-10 items-center py-4'>
          <div className='font-extrabold mx-9'>Itask</div>
          <div className='flex gap-7 mx-9'>
          <li className='cursor-pointer hover:font-bold transition-all '>Home</li>
          <li className='cursor-pointer hover:font-bold transition-all w-20 '>Your Tasks</li>
          </div>
        </ul>
      </nav>
    
  )
}

export default Navbar
