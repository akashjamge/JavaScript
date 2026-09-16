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
// console.log(a);
// console.log(b);
// console.log(c);//30

// console madhla global scope and node use karun access kelela global scope donhi alag aahet



// scope level and mini hoisting 

function one(){
    const username = "Akash"

    function two(){
        const website = "Youtube"
        console.log(username);
        
    }
    // console.log(website);
    two()
    
}
// console.log(username);
// one()



if (true) {
    const username = "Akash"

    if (username === "Akash") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// *********************** Interesting *******************************

// if we only declare the function without storing 
// it in any variable we can access theat function
// before declaration

// console.log(addOne(5));
function addOne(num){
    return num+1
}


// Hoisting - 
// we can not access the variable or function before the intialization when 
// the function is wrapped or declared inside the variable

// console.log(addTwo(6));//Error
const addTwo = function(num){
    return num+2
}

