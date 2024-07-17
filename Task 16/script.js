const a=prompt("Enter a no.")
const b= prompt("Enter another no.")
let prom=new Promise ((resolve,reject) => {
    if (b!=0){
    resolve(a/b)}
    else{
       reject("Division by Zero is not supported");
    }
})
prom.then ((e) => {
  console.log(e)  
}).catch ((a) => {
    console.log(a)
})

