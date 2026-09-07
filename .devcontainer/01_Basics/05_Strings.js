const name = "Akash "
const repoCount = 2

// console.log(name + repoCount + " value");

//String Interpolation-We can inject variables inside {}
// console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);


//String Declaration
let gameName = new String("Akash jamge")
// console.log(gameName[0]);//A

//String inBuilt functions
// console.log(gameName.__proto__);//Syntax
// console.log(gameName.length);//11
// console.log(gameName.toUpperCase());//AKASH JAMGE
// console.log(gameName.charAt(6));//j
// console.log(gameName.indexOf("e"));

//subString
const newString = gameName.substring(0,4)
// console.log(newString);

//slice
const anotherString = gameName.slice(-8,8)
// console.log(anotherString);

//trim => use to remove white spaces
const string1 = "   Akash_jamge "
// console.log(string1);
// console.log(string1.trim());


//Replace
const url = "https://Akash20%30Jamge.com"
// console.log(url.replace('%30',"_"));
// console.log(url.includes("Akash"));


//split
// console.log(string1.split('_'));


//Concat
const str1 ="Akash "
const str2 = "Jamge"

console.log(str1.concat(str2));



