let arr = [{
    "StudentName": "Swayam",
    "Marks": `44`,
    "Class": `12`,
    "Adress": `India`
},
{
    "StudentName": `Avinash`,
    "Marks": `54`,
    "Class": `12`,
    "Adress": `India`
},
{
    "StudentName": `Keshav`,
    "Marks": `44`,
    "Class": `22`,
    "Adress": `India`
},
{
    "StudentName": `Gourav`,
    "Marks": `44`,
    "Class": `12`,
    "Adress": `India`
},
{
    "StudentName": `Madhav`,
    "Marks": `44`,
    "Class": `12`,
    "Adress": `India`
},
{
    "StudentName": `Aniket`,
    "Marks": `44`,
    "Class": `12`,
    "Adress": `India`
},
{
    "StudentName": `Harsh`,
    "Marks": `44`,
    "Class": `12`,
    "Adress": `India`
},
{
    "StudentName": `Harshit`,
    "Marks": `44`,
    "Class": `12`,
    "Adress": `India`
},
{
    "StudentName": `Ganji Chudail`,
    "Marks": `44`,
    "Class": `12`,
    "Adress": `India`
},
{
    "StudentName": `Ganji Chudail`,
    "Marks": `44`,
    "Class": `12`,
    "Adress": `India`
},
{
    "StudentName": `Ganji Chudail`,
    "Marks": `44`,
    "Class": `12`,
    "Adress": `India`
},
{
    "StudentName": `Ganji Chudail`,
    "Marks": `44`,
    "Class": `12`,
    "Adress": `India`
},
{
    "StudentName": `Ganji Chudail`,
    "Marks": `44`,
    "Class": `12`,
    "Adress": `India`
},
{
    "StudentName": `Ganji Chudail`,
    "Marks": `44`,
    "Class": `12`,
    "Adress": `India`
},
{
    "StudentName": `Ganji Chudail`,
    "Marks": `44`,
    "Class": `12`,
    "Adress": `India`
},
{
    "StudentName": `Ganji Chudail`,
    "Marks": `44`,
    "Class": `12`,
    "Adress": `India`
},
{
    "StudentName": `Ganji Chudail`,
    "Marks": `44`,
    "Class": `12`,
    "Adress": `India`
},
{
    "StudentName": `Ganji Chudail`,
    "Marks": `44`,
    "Class": `12`,
    "Adress": `India`
},
{
    "StudentName": `Ganji Chudail`,
    "Marks": `44`,
    "Class": `12`,
    "Adress": `India`
},]
function filters(abc) {
   
    let arr2 = []
if(abc!=""){
    for (let i = 0; i < arr.length; i++) {
         const e = arr[i].StudentName.toLowerCase();
           

            if (e.startsWith(abc.toLowerCase())){
                arr2.push(arr[i])
                add(arr2)   
        }   
        
    }
    
}
else(add(arr))    
    return arr2
    }
    


 function add(arr){
   let newarr=[]
   for (let i = 0; i < arr.length; i++) {
        let b=`<div class="box">
        <p>Student Name : ${arr[i].StudentName}</p>
                        <p>Marks : ${arr[i].Marks}</p>
                        <p>Class : ${arr[i].Class}</p>
                        <p>Adress : ${arr[i].Adress}</p>
                        </div>`
        newarr.push(b)
   }
  document.getElementById("container").innerHTML=newarr.join("")
 } 
 document.getElementById('btn').addEventListener("click",() => {
    
     const n = document.getElementById("name")
     
     document.getElementById("onchange",filters(n.value))
    }
) 
const n = document.getElementById("name")

add(arr)
n.addEventListener("change", filters(n.value))


// `<div class="box">
//         <p>Student Name : ${e.StudentName}</p>
//                         <p>Marks : ${e.Marks}</p>
//                         <p>Class : ${e.Class}</p>
//                         <p>Adress : ${e.Adress}</p>
//                         </div>`