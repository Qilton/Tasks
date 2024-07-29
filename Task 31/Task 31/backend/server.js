const express=require("express")
const cors=require('cors')
const bodyParser=require("body-parser")
const { MongoClient } = require('mongodb');
const app = express()
const port = 3000
app.use(bodyParser.json())
app.use(cors())
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'Todos';

client.connect()
app.get('/', async(req, res) => {
  const db = client.db(dbName);
  const collection = db.collection('todo');
  const findResult = await collection.find({}).toArray();
  console.log(findResult)
  res.json(findResult)
})

app.post('/', async(req, res) => {
  let todo=req.body
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection('todo');
  await collection.insertOne(todo)
  res.send({success:true})
 })

 app.delete('/',async(req,res) => {
   console.log(req.body)
  let todo=req.body
  const db = client.db(dbName);
  const collection = db.collection('todo');
  await collection.deleteOne(todo)
 }
 )


 app.put('/',async(req,res)=>{
   let todo=req.body
   console.log(req.body)
   const db = client.db(dbName);
   const collection = db.collection('todo');
   let obj=await collection.findOne(todo)
  let isCompleted=obj.isCompleted
  console.log(isCompleted)
    await collection.updateOne(todo,{$set:{isCompleted:!isCompleted}})

 })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

