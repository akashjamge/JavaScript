const marvelHeroes = ["Thor","Hulk","Thanos"]
const dcHeroes = ["batman","superman","Aqua"]

// marvelHeroes.push(dcHeroes)
// console.log(marvelHeroes);
// console.log(marvelHeroes[3]);
// console.log(marvelHeroes[3][0]);


const heroes = marvelHeroes.concat(dcHeroes)//concat returns new array by combining or joining two or more arrays
// console.log(heroes);

//Spread operator
const AllHeroes = [...marvelHeroes,...dcHeroes]//Spread operator same performs same operation as concat but it is used mostly
// console.log(AllHeroes);

const newArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const res = newArr.flat(Infinity)
// console.log(res);

const name = "Akash"
// console.log(Array.isArray(name));
// console.log(Array.from(name));
// console.log(Array.from({name:"Akash"}));//interesting - we have to specify


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));


