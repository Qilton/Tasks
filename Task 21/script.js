//Question 1
let arr = [1, 2, 3, 4, 5, 6]

const newArr = arr.map(num => Math.pow(num, 2))
console.log(newArr)
//Question 2
const score = 45
if (score < 25) {
    console.log("F")
}
else if (score > 25 && score < 50) {
    console.log("D")
}
else if (score > 50 && score < 70) {
    console.log("C")
}
else if (score > 70 && score < 90) {
    console.log("B")
}
else {
    console.log("A")
}
//Question 3
let car = {
    companyName: "Toyota",
    model: "Camry",
    year: 2022
};
console.log("Year:"+car.year)
console.log("Model :"+ car.model)
function changeYear(){
    car.year=2000
}
changeYear()
console.log(car)


//Question 4
let c = 0;
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
const newarr = arr2.filter(num => {
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            c = c + 1

        }

    }
    if (c == 2) {
        return num
    }
    c = 0

})
console.log(newarr)

//Question 5
//Map can be used when you want to perform a function on every single index of an array
//Filter can be used when you want to only get some elements of an array which fill a certain condition
//Reduce can be used when you want to reduce the array in a single value. Like if u want to get the sum of an array reduce can be a good way

//Quesion 6
async function main() {
    await fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}
main()

//Question 7
let person = {
    name: 'John Doe',
    address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zip: '90210'
    },
    contact: {
        phone: '123-456-7890'
    },
    name: 'John Doe',
    address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zip: '90210'
    },
    name: 'Mike Johnson',
    address: {
        street: '789 Oak St',
        city: 'Metropolis',
        state: 'IL',
        zip: '54321'
    },
    contact: {
        phone: '987-654-3210'
    }

};

 let phoneNumber = person.contact?.phone;

console.log('Phone Number:', phoneNumber); 