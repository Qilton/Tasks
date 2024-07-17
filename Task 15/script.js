let arr=[11,4,6,2,14,13]
var s=0
let a=0
var c=0
var h=0
for (const a of arr) {
    s=s+a
    if ((a%2)!=0){c++}
    if (a>h){
        h=a
    }
}

console.log("Highest no. in array = "+ h)
console.log("Sum of all  elements of array = "+ s)
console.log("No. of odd elements in araay = "+ c)

