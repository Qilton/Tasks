import { useState } from 'react'
import Card from './components/card'
import "./App.css"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="nav">All the cards are here</div>
    <div className="container">
     <Card img="Nike.jpg" name="Hello" desc="This is me saying hello"/>
     <Card img="Nike.jpg" name="Hello" desc="This is me saying hello"/>
     <Card img="Nike.jpg" name="Hello" desc="This is me saying hello"/>
     <Card img="Nike.jpg" name="Hello" desc="This is me saying hello"/>
     <Card img="Nike.jpg" name="Hello" desc="This is me saying hello"/>
     <Card img="Nike.jpg" name="Hello" desc="This is me saying hello"/>
     <Card img="Nike.jpg" name="Hello" desc="This is me saying hello"/>
     </div>
    </>
  )
}

export default App
