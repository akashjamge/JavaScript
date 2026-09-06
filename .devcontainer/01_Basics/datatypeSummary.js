
//Master the Objects and browser events to master the javascript



//JavaScript is a Dynamically typed language



/*
datatype => returnType

String => String          Array => object
Number => number          object => object
boolean => boolean        function => object function / function   
null  => object
undefined => undefined
Symbol => symbol
Bigint => undefined
*/
// 1 .Primitive datatype
// 7 Types -
// String , Number , Boolean , null , undefined , Symbol , BigInt

const score = 100
const scoreValue = 100.5

const isLoggedIn = false
const outsidetemp = null 

let userEmail ;//let userName = undefined

//Symbol is use to make component un unique
const Id = Symbol("123")
const anotherId =Symbol("123") 
console.log(Id === anotherId);

const bigNumber = 564544568454n//If we want to represent any number as BigInt just add n at the end
console.log(typeof bigNumber);//return type is undefined

// 2 .Non primitive datatype(reference type)
//Return type of all non primitive datatype is object and of function is object function
// Array , Objects , functions

//Array
const Heroes =["Hulk","Thor","Shaktimaan"];
console.log(typeof Heroes);

//Object (Declared inside {})
let myObj = {
    name : "Akash",
    age : 25 ,
    gender : "M"
}

//functions
let myFunction = function (){
    //console.log("hello");
}
console.log(typeof myFunction);

