import React from 'react'

const login = () => {
  return (
   <div className="container mx-auto my-56 w-1/4 h-1/2 border-black border-2 px-12 py-10 flex flex-col gap-10 rounded-lg">
        <h1 className='text-3xl font-bold text-center '>LOGIN</h1>
        <form action="submit" className='flex flex-col gap-5'>
        <div className='flex flex-col gap-2'>
        <label htmlFor="name" className='text-lg font-bold '>Enter Your Name:</label>
        <input type="text" id='name' placeholder='JohnDoe' className='bg-slate-200 placeholder: py-2 px-4 rounded-md text-start' /></div>
        <div className='flex flex-col gap-2'>
        <label htmlFor="pass" className='text-lg font-bold '>Enter Your Password:</label>
        <input type="password" id='pass' placeholder='Password' className='bg-slate-200 placeholder: py-2 px-4 rounded-md text-start' /></div>
        <div className='flex justify-center'><input type="button" value="Login" className='px-5 py-2 rounded-lg bg-green-500 text-white font-bold text-lg cursor-pointer' /></div>
        </form>

        
   </div>
  )
}

export default login
