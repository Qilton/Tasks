import Home from './components/home'
import Payment from './components/payment'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
function App() {

  const router=createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/payment",
      element:<Payment/>
    }
  ])
  
  
  return (
    <>
    
      <RouterProvider router={router}/> 

    </>
  )
}

export default App
