// How to declare function 
/*
Syntax -

 function identifier(){

 }

 we can call any function with the help of the identifier of given function
ex- identifier()
here, identifier is a reference and () is execution

 */

function sayMyName(){
    console.log("Akash");
    console.log("Akash");
    console.log("Akash");
    console.log("Akash");
    console.log("Akash");
}
// sayMyName()



// function addTwoNumbers(number1,number2){
// console.log(number1+number2);
// }
// addTwoNumbers(1,null)

function addTwoNumbers(number1,number2){
// let result = number1+number2
// return result
// console.log("Akash");This will not execute as it is written after the return keyword

return number1+number2
}

const result = addTwoNumbers(4,9)
// console.log("Result: " , result);


// function isLoggedIn(username){
//     return `${username} just logged in`
// }
// isLoggedIn()//This will not give any output as it is not defined in variable or not in printing statement
// console.log(isLoggedIn("Akash")); //Akash just logged in
 
//if we dont give any value in argument
// function isLoggedIn(username){
//     return `${username} just logged in`
// }
// console.log(isLoggedIn());//undefined just logged in

// function isLoggedIn(username){
//     if(username === undefined){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(isLoggedIn());

    // OR

function isLoggedIn(username = "Akash"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(isLoggedIn("Sam"));    



// Using rest operator in functions (rest operator => ...variableName)
// function calculatecartPrice(...num1){ 
//     return num1
// }
// console.log(calculatecartPrice(200,500,1000,2000));

function calculatecartPrice(val1,val2,...num1){ 
    return num1
}
// console.log(calculatecartPrice(200,500,1000,2000));



// function with object

const user = {
    username : "Akash",
    price : 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)

// Another way
// handleObject(
//     {
//         username:"sam",
//         price:100
//     }
// )

// functions with Array

const myNewArray = [100,200,300,400]

function secondArray(getArray){
    return getArray[0]
}
// console.log(secondArray(myNewArray));
         // OR
// console.log(secondArray([100,200,300,400]));
