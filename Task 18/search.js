const filter= () => {       
    return n.value 
}

let i = 0
function text(n) {
    

const box = (rname, marks, rclass, radress,container="container") => {

    let obj = new Map([
        ["Student Name", `${rname}`],
        ["Marks", `${marks}`],
        ["Class", `${rclass}`],
        ["Adress", `${radress}`],

    ])
    let arr = []
    arr.push(obj)
   
    let div = document.createElement("div")
    div.className = `box box${i}`
    a = arr.map

    document.getElementById(`${container}`).append(div)
    arr.forEach(e => {
        document.querySelector(`.box${i}`).insertAdjacentHTML("afterbegin", `<p>Student Name: <span>${obj.get("Student Name")}</span></p>`)
        document.querySelector(`.box${i}`).insertAdjacentHTML("beforeend", `<p>Marks: <span>${obj.get("Marks")}</span></p>`)
        document.querySelector(`.box${i}`).insertAdjacentHTML("beforeend", `<p>Class: <span>${obj.get("Class")}</span></p>`)
        document.querySelector(`.box${i}`).insertAdjacentHTML("beforeend", `<p>Adress: <span>${obj.get("Adress")}</span></p>`)
        arr.pop()
        
    });
   
    
    i++
    return obj
    
}

}
const n = document.getElementById("name")
const b = document.getElementById("btn")

b.addEventListener("click",() => {
   text(n) 
})















// a=box(12,334,55,78)
// console.log(a)
// const n = document.getElementById("name")
// const b = document.getElementById("btn")
// b.addEventListener("click",() => {
//     document.getElementById("container").style.display="none"
//     if(b==""){
        
//     }
//     else{
           
//     }
// }
// )


// const search= () => {
//     let i=0
//     const a = document.getElementById("name")
//     const b = document.getElementById("btn")
//     b.addEventListener("click",filter=() => {
//       let l=document.querySelector(`.box${i}`).firstElementChild.lastElementChild.textContent
//       console.log(l)
//       console.log(a.value)
//       for (const x in a.value) {
//         for (const j in l) {
//                 if((x!=j))
//                     {
//                         console.log(i)
//                         document.querySelector(`.box${i}`).style.display="none"   
//                     }
//                     else{
//                      break;
//                     }
//         }
//       }
//     }
//     )
// }
// search()




