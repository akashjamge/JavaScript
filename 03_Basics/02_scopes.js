// let a = 10 
// const b = 20 
// var c = 30

// console.log(a);//10
// console.log(b);//20
// console.log(c);//30


// Scope does not matter to var 
// Global scope
let a = 100
const b = 200 
var c = 300 

{
    // Declaring variables insdide block scope 
    let a = 10 ; 
    const b = 20 
    var c = 30
}
console.log(a);
console.log(b);
console.log(c);//30

// console madhla global scope and node use karun access kelela global scope donhi alag aahet