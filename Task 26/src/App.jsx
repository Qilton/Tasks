
import { createBrowserRouter, BrowserRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Navbar from './components/navbar'
import Login from './components/login'
import Signup from './components/signup'
function App() {
 const router= createBrowserRouter([
  {
    path:"/",
    element:<Navbar/>
  },
  {
    path: "/login",
    element:<Login/>
  },
  {
    path: "/signup",
    element:<Signup/>
  },
 ])

  return (
    <>
    
     <RouterProvider router={router}/> 
    </>
  )
}

export default App
