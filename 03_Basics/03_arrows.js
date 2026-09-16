// this keyword in object
const user = {
    username : "Akash",
    price : 999 ,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username = "AJ"
// user.welcomeMessage()

// Important note 
// console.log(this);// in node environment output is {}
// In console of browser it will give window object (global object)



// this keyword in function
// function one(){
//     let username = "Akash"
//     console.log(this.username);
//     // If we try to access using this keyword in function it will not give output
//     // it will be undefined
// }
// one()//undefined



// this keyword in arrow function

// const user1 = function(){
//     let username = "Akash"
//     console.log(this.username);
// }
// user1()//undefined

// in arrow function

// const user1 = () => {
//     let username = "Akash"
//     console.log(this.username);//undefined
//     console.log(this);//{}
// }
// user1()



// Arrow function -
// syntax
// () => {}

    // const add = (num1,num2) => {
    //     return num1+num2 // curly braces asel tr return keyword mandatory aahe 
    // }
    // console.log(add(5,5));


    // ** Implicit return (without using return )
    // Also we can define arrow function as following
    // const add = (num1,num2) => num1+num2 // without using return
    // console.log(add(10,10));
    
    //Another way 
    // mostly used in react
    // const add = (num1,num2) => (num1+num2)//Using ()

    const add = (num1,num2) => ({username:"Akash"})// we have to wrap the object inside () otherwise it will be undefined
    console.log(add(10,10));