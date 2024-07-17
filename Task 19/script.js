let btns = document.querySelector(".btns")
console.log(btn);
let arr = ["Dry Cleaning.jpg", "Leather Cleaning.jpg", "Wedding Dress Cleaning.jpg", "Stain Removal.jpg"]
let arr2 = ["gu"]
let price = document.getElementById("price");
console.log(price)
let rname = document.getElementById("rname");
let add = document.querySelector(".grid")
const grid = (Sno, Services, items) => {
    let div = document.createElement("div")
    div.innerHTML = div.innerHTML + (Sno)
    let div2 = document.createElement("div")
    div2.innerHTML = div2.innerHTML + (Services)
    let div3 = document.createElement("div")
    div3.innerHTML = div3.innerHTML + (items)
    add.append(div)
    add.append(div2)
    add.append(div3)
}

const next = () => {

    if (arr2.length == 1) {
        rname.innerHTML = "Dry Cleaning"
        price.innerHTML = "$3.99"
    }
    else if (arr2.length == 2) {
        rname.innerHTML = "Leather Cleaning"
        price.innerHTML = "$9.99"
    }
    else if (arr2.length == 3) {
        rname.innerHTML = "Wedding Dress Cleaning"
        price.innerHTML = "$7.99"
    }
    else {
        rname.innerHTML = "Stain remove"
        price.innerHTML = "$5.99"
    }

    if (arr2.length == 5) {
        alert("No more Services")
    }
    else {
        for (let i = 0; i < arr2.length; i++) {
            let a = document.getElementById("image").src = arr[i]
        }
        arr2.push('gi')
    }
}
let s=0
const next2 = () => {
    
    if (arr2.length == 1) {
        
        rname.innerHTML = "Dry Cleaning"
        price.innerHTML = "$3.99"
        grid("1", "Ironing", "$4.99")
        s = s + 4.99;
        document.getElementById("total").innerHTML = "$" + `${s}`
    }
    else if (arr2.length == 2) {
        console.log(s)
        rname.innerHTML = "Leather Cleaning"
        price.innerHTML = "$9.99"
        grid("2", "Dry Cleaning", "$3.99")
        s = s + 3.99;
        document.getElementById("total").innerHTML = "$" + `${s}`
    }
    else if (arr2.length == 3) {
        rname.innerHTML = "Wedding Dress Cleaning"
        price.innerHTML = "$7.99"
        grid("3", "Leather Cleaning", "$9.99")
        s = s + 9.99;
        document.getElementById("total").innerHTML = "$" + `${s}`
    }
    else if (arr2.length == 4) {
        rname.innerHTML = "Stain removal"
        price.innerHTML = "$5.99"
        grid("4", "Wedding Dress Cleaning", "$7.99")
        s = s + 7.99;
        document.getElementById("total").innerHTML = "$" + `${s}`
    }
    else {
        grid("5", "Stain Removal", "$5.99")
        s = s + 5.99;
        document.getElementById("total").innerHTML = "$" + `${s}`
    }
    if (arr2.length == 5) {
        alert("No more Services")
    }
    else {
        for (let i = 0; i < arr2.length; i++) {
            let a = document.getElementById("image").src = arr[i]
        }
        arr2.push('gi')
    }
}




    let a = btns.firstElementChild.addEventListener("click", () => {
        next()
        
    })
    let b = btns.lastElementChild.addEventListener("click", () => {
        next2()
        document.getElementById("btn").style.backgroundColor="purple"
    })

    document.getElementById("btn").addEventListener("click", () => {
        a=document.getElementById("btn").style.backgroundColor
        if (a!= "purple")
        {
            document.getElementById("box2").innerHTML=document.getElementById("box2").innerHTML+"Add some services to the list first"
        }
        else{
            alert("An email has been sent to you")
        }
    }
    )

