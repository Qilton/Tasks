var a = prompt("Enter a no.")
let b = 0
var s = 0
var c = 0
var sum=0
for (const c of a) {
    
    b = c ** 3;
    s = s + b
}
if (s == a) {
    alert("This is an armstrong Number")
}
else {
    alert("This is not an armstrong Number")
}
for (let i = 0; i < a; i++) {
    if (a % i == 0) {
        c++
    }
}
if (c == 1) {
    alert("This is a prime no.")
}
else {
    alert("This is not a prime no.")
}
for (let i = 0; i <= a; i++) {
    if (a % i == 0) {
        alert("The factors of " + a + " are " + i)
    }
    
}
while (a!=0){
    sum= sum+ (Math.floor(a % 10));
    a=a/10;
    console.log(a)
}
alert("The sum of digits in " + a + " is " + sum)

