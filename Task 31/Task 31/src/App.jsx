import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setshowFinished] = useState(true)

  const getTodo = async () => {
    let req = await fetch("http://localhost:3000")
    let todo = await req.json()
    console.log(todo)
    setTodos(todo)
}


useEffect(() => {
    getTodo()
    todos.map(item=>{
      if(item.isCompleted==true){

      }
    })
}, []);



  const handleEdit = (e) => {
    let id = e.target.name
    let t=todos.filter((item=>item.id === id))
    console.log(t)
    setTodo(t[0].todo)
    let newTodos = todos.filter((item => { return item.id !== id }))
      setTodos(newTodos)

  }

  const handleDelete = async(id) => {
      console.log(id)
    if (confirm("Are You Sure") == true) {
      let newTodos = todos.filter((item => { return item.id !== id }))
      setTodos(newTodos)
      await fetch("http://localhost:3000/", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({id})})
      
    }
   
 
  }

  const handleAdd = async() => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    console.log(todos)
  await fetch("http://localhost:3000/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: uuidv4(), todo, isCompleted: false } ) })
    
    
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }
  const handleCheckbox = async (id) => {
    let index = todos.findIndex((item) => item.id === id);
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    
    await fetch("http://localhost:3000/", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id })
    });
  }

 return (
    <>
      <Navbar />
      <div className="container  mx-auto my-5 rounded-xl bg-violet-100 p-5 min-h-[80vh] w-[80vw] md:w-[50vw]">
        <div className="addTodo my-5">
          <h2 className='text-lg font-bold'>Add a Todo</h2>
          <div className='w-full flex'>
          <input type="text" onChange={handleChange} value={todo} className='w-full rounded-lg' />
          <button onClick={handleAdd} disabled={todo.length<3} className='bg-violet-800 hover:bg-violet-950 disabled:bg-violet-500 px-2 py-1 font-bold text-sm text-white mx-5 rounded-lg' >Add</button>
          </div>
        </div>
     
        <h2 className='text-lg font-bold'>Your Todos</h2>

        <div className="todos">
          {todos.length === 0 && <div className='text-xl font-bold text-center py-16'>No Todos to Display</div>}
          {todos.map(item => {

            return (showFinished || !item.isCompleted) && <div key={item.id} className="todo flex w-full justify-between my-2">
              <div className='flex gap-5'>
                <input onChange={()=>{handleCheckbox(item.id)}} type="checkbox" name={item.id}  checked={item.isCompleted?true:false} />
                <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
              </div>
              <div className="button flex h-full">
                {/* <button name={item.id} onClick={handleEdit} className='bg-violet-800 hover:bg-violet-950 px-2 py-1 font-bold text-sm text-white mx-2  rounded-lg'>Edit</button> */}
                <button name={item.id} onClick={()=>{handleDelete(item.id)}} className='bg-violet-800 hover:bg-violet-950 px-2 py-1 font-bold text-sm text-white mx-2  rounded-lg'>Delete</button>
              </div>
            </div>
          })}
        </div></div>
    </>
  )
}

export default App
