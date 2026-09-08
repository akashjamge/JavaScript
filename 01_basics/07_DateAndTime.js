let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());
// console.log(typeof myDate);

// let newDate = new Date(2001,3,2)
// console.log(newDate.toDateString());

let date1 = new Date("2026-09-09")
// console.log(date1.toLocaleDateString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(date1.getTime());//time in millisecond
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDate());//start from 0
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());//start from monday


console.log(newDate.toLocaleString('default' , {
    weekday:"long"
}));









