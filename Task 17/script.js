let box=document.getElementById("box1")

box.addEventListener("click", ()=>{
    document.getElementById("box1").style.backgroundColor= "red"
})
let box2=document.getElementById("box2")

box2.addEventListener("click", ()=>{
    document.getElementById("box2").style.backgroundColor= "blue"
})
let box3=document.getElementById("box3")

box3.addEventListener("click", ()=>{
    document.getElementById("box3").style.backgroundColor= "green"
})
let box4=document.getElementById("box4")

box4.addEventListener("click", ()=>{
    document.getElementById("box4").style.backgroundColor= "yellow"
    
})
const a=document.getElementById("Name")
  
const b=document.getElementById("btn")
function add(){
    console.log(a.value)
    document.body.querySelector(".Welcome").insertAdjacentHTML("beforeend","  "+a.value)
}
b.addEventListener("click",(e) => {
    add()
}
)













// let boxes= document.querySelectorAll(".box")
// for (let i = 0; i < boxes.length; i++) {
//     const element = boxes[i];
//     element.style.backgroundColor= `"${boxes[i].firstChild}"`
//     console.log(boxes[i].firstChild)
//     console.log(element)


