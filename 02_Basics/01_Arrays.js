//Array Decalaration

const arr1 = [0,1,2,3,4,5]
// OR
const arr2 = new Array(1,2,3,4,5)
const heroes = ["thor","hulk","batman"]
// console.log(arr1[5]);
// console.log(heroes[2]);

//Array Methods

// arr1.push(6)
// arr1.push(7)//push is used to element at last position
// arr1.pop()//pop is used to remove the last element

// arr1.unshift(9)//used to add element at the start 
// arr1.shift()//used to remove the first or satrting element
// console.log(arr1);

// console.log(arr1.includes(9));
// console.log(arr1.indexOf(10));
// console.log(arr1.indexOf(5));

// const newArr = arr1.join()
// console.log(arr1);
// console.log(newArr);
// console.log(typeof newArr);//string

console.log("A",arr1);
//slice method
const a1 = arr1.slice(1,3)
console.log(a1);

console.log("B",arr1);



const a2 = arr1.splice(1,3)
console.log("C",arr1);
console.log(a2);







