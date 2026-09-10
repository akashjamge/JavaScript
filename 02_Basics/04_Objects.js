//singelton object
//with the help of constructor

// const tinderUser = new Object()// singelton object 

const tinderUser = {}// non singelton object
tinderUser.id = "abc123"
tinderUser.name = "Akash"
tinderUser.isLoggedIn = false
// console.log(tinderUser);


const regularUser = {
    email : "some@gmail.com",
    fullname :{
        userfullname : {
            firstname : "Akash",
            lastname : "Jamge"
        }

    }
}
// console.log(regularUser);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj3 = {5:"a",6:"b"}
// const obj4 = {obj1,obj2}
// const obj4 = Object.assign({},obj1,obj2,obj3)//values of obj1,2,3 will be assigned inside {} 
//if we take obj1 at first values will be assigned inside obj1

const obj4 = {...obj1,...obj2}//spread operator
// console.log(obj4);


console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));



