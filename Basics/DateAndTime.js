let myDate = new Date();
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())

// let createMyDate = new Date(2023, 0 , 23);
// console.log(createMyDate.toDateString());

let myCreatedDate = new Date("01-14-2023");

let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})