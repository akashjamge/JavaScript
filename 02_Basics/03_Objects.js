//singelton
//Object.create

//object literal
//it is in key : value pairs

const sym = Symbol("key1")//interview question-use symbol as a key and show output
const user = {
    name : "Akash",
    "full name":"Akash jamge",
    [sym]:"mykey1",//we have to declare symbol in [] otherwise the typeof symbol will be string
    email : "akash@gmail.com",
    age : 25 ,
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}

// console.log(user.name);
// console.log(user["full name"]);//Interview question - right syntax use ["key"]
// console.log(user[sym]);//use [] to access the symbol or any other keys
// console.log(user.lastLoginDays);
// console.log(user.age);

//over-riding values (changing)
//by using '='
user["full name"] = "Akash Govindrao Jamge"
// console.log(user["full name"]);

//freezing the object
// Object.freeze(user)
user.email = "akashjamge@gmail.com"//this will not be changed
// console.log(user);

user.greeting = function(){
    console.log("Hello user");
    
}
console.log(user.greeting());
user.greetingTwo = function(){
    console.log(`Hello user , ${this.name}`);
    
}
console.log(user.greetingTwo());

