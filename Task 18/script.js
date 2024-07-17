
function text()) {
        

const box = (rname, marks, rclass, radress) => {
        arr=[rname, marks, rclass, radress]
    let html = `<div class="box">
            <p>Student Name : <span>${rname}</span></p>
            <p>Marks : ${marks}</p>
            <p>Class : ${rclass}</p>
            <p>Adress : ${radress}</p>
            </div>`
    document.getElementById("container").innerHTML = document.getElementById("container").innerHTML + html
}

box("Keshav", 40, 12, "India")
box("Gourav", 40, 12, "India")
box("Avinash", 40, 12, "India")
box("Swayam", 40, 12, "India")
box("Madhav", 40, 12, "India")
box("Shlok", 40, 12, "India")
box("Keshav", 40, 12, "India")
box("Keshav", 40, 12, "India")
box("Keshav", 40, 12, "India")
box("Keshav", 40, 12, "India")
box("Keshav", 40, 12, "India")
box("Keshav", 40, 12, "India")
box("Keshav", 40, 12, "India")
box("Keshav", 40, 12, "India")
box("Keshav", 40, 12, "India")
box("Keshav", 40, 12, "India")
box("Keshav", 40, 12, "India")
box("Keshav", 40, 12, "India")
box("Keshav", 40, 12, "India")
box("Keshav", 40, 12, "India")
box("Keshav", 40, 12, "India")
box("Keshav", 40, 12, "India")
box("Keshav", 40, 12, "India")
box("Keshav", 40, 12, "India")
box("Keshav", 40, 12, "India")
}






// let boxes = document.querySelectorAll(".box")
// let arr = []
// boxes.forEach((e) => {
//     arr.push(e)
// }
// })
// const a = document.getElementById("name")
// const b = document.getElementById("btn")
// console.log(a.value)
// function add() {

//     for (i in a.value) {
//         console.log(i)
//         for (j in arr[i]) {
//             if (i != j) {
//                 arr[i] = "none"

//             }

//         }

//     }


//     b.addEventListener("click", () => {
//         add()
//     }
//     )

