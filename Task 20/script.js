


let arr=[{Sno:1,Service:"Dry Cleaning",Price:300},
    {Sno:2,Service:"Ironing",Price:200},
    {Sno:3,Service:"Folding",Price:100},
    {Sno:4,Service:"Wedding Dress Cleaning",Price:800},
    {Sno:5,Service:"Leather and Seude Cleaning",Price:700},
    {Sno:6,Service:"Stain Removal",Price:500},
]
let s=0
for (let i = 0; i < arr.length; i++) {
 const e = arr[i];
 let a=document.getElementsByTagName("button")[i+1]
 console.log(a)
    a.addEventListener("click",() => {
        if (a.innerHTML=="Add Item"){
        document.querySelector("tbody").innerHTML=document.querySelector(".tbody").innerHTML+`<tr class=tr${i}>
                                                     <td>${e.Sno}</td>
                                                    <td>${e.Service}</td>
                                                    <td>${e.Price}</td>
                                                    </tr> `
                      a.style.backgroundColor="red"
                       a.innerHTML="Remove Item"  
          s =s+ e.Price
            document.getElementById("total").innerHTML=parseInt(s)
        }
        else{
            console.log(i)
                          let b= document.querySelectorAll(`.tr${i}`)
                          b.forEach(e => {
                            e.innerHTML=""
                          });
                              a.style.backgroundColor="#90EE90"
                              a.innerHTML="Add Item" 
                              
                              s=s-`${e.Price}`     
                              document.getElementById("total").innerHTML=s                  
    }
}
    
        
    )
}

function submit() {
    if (document.querySelectorAll(".tbody").innerHTML!=""){
   
        document.querySelector(".box2").innerHTML=document.querySelector(".box2").innerHTML+ "<p>Email has been sent succesfully</p>"
        document.querySelector(".tbody").innerHTML=""
       
        let c=document.querySelectorAll(".but")
        c.forEach(e => {
            e.style.backgroundColor="#90EE90"
           e.innerHTML="Add Item"})
       
        
    }
    else{
         console.log("hi")
        document.querySelector(".box2").innerHTML=document.querySelector(".box2").innerHTML+ "<p>Please add Some more services</p>"
       
        
    }
    
}

document.getElementById("btn").addEventListener("click", () => {
    submit()
}

)
