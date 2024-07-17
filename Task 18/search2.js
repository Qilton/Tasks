

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


function filter(abc) {

    let arr2 = []
    // const n = document.getElementById("name")

    for (let i = 0; i < arr.length; i++) {
        
      
       
            const e = arr[i].StudentName;
         
            if (e.startsWith(abc)){
                arr2.push(e)
            
            
        }
            
           
            
    }
    
        
    return arr2
    }
   
    
 console.log(filter("s"))  


function add(){
    
    arr.forEach(e => {
        let div = document.createElement("div")
        div.className = `box`
        div.innerHTML = `<p>Student Name : ${e.StudentName}</p>
                        <p>Marks : ${e.Marks}</p>
                        <p>Class : ${e.Class}</p>
                        <p>Adress : ${e.Adress}</p>`
        document.getElementById("container").append(div)
    });
}
function search() {
    document.getElementById("container").innerHTML=""
    let arr3 = filter()
    console.log(arr3)
    arr3.forEach(e => {
        
        let div = document.createElement("div")
        div.className = "box"
        div.innerHTML = `<p>Student Name : ${e.StudentName}</p>
                        <p>Marks : ${e.Marks}</p>
                        <p>Class : ${e.Class}</p>
                        <p>Adress : ${e.Adress}</p>`
        document.getElementById("container").append(div)
    });
}
const b = document.getElementById("btn")
b.addEventListener("click", () => {
    search()
})
add()