function compoundInterest(P, r, n, t) {
  
    let A = P * Math.pow(1 + r/n, n*t);

    A = Math.round(A * 100) / 100;
    return A;
}

let principal = 1000;
let rate = 0.05; 
let timesCompounded = 4;
let years = 5; 

let amount = compoundInterest(principal, rate, timesCompounded, years);
console.log("Amount after 5 years:", amount); 
