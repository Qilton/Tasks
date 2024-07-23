import { useState } from 'react'
import { useEffect } from 'react';
function App() {

  
  useEffect(() => {
    const fetchdata= async()=>{
      try{
      let r=await fetch("https://jsonplaceholder.typicode.com/photos")
      let res= await r.json()
   
}
      catch(error){
        console.error('Error fetching data:', error);
      }
   }
  fetchdata()}, []);

 
console.log(a)


  return (
    <>
      {a.map((item =>{



      }))}
    </>
  )
}

export default App
