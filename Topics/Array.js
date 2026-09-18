/* 
    Array :- A special type of object used to store collection of mutiple values under a single vairable name.
    Arrays in javascript are resizable and can contain different data types.
    Javascript array copy operation create shallow copies rather than deep copies.
    
    Shallow Copy:- A shallow copy of an object is a copy whose properties share the same reference point.
    Deep Copy :- A deep copy of a object is a copy whose properties doesn't share the same refrence point the copy one has it's own refrence point.

*/ 
const myarr = [0,1,2,3,4,5];

// Array Methods

// Add elements to the array
myarr.push(6);
// console.log(myarr);

// Removes the last element of the array
myarr.pop();
// console.log(myarr);

// Adds elements to the start index of the array and shifts all the elements forward.
// myarr.unshift(10)

// Removes element form the start index of the array and shifts all the elements backward.
// myarr.shift(10);

// Checks if a paticular element is present in the array or not.
const boolean = myarr.includes(1);

// Returns the index of the paticular element. if the element is not present it will return -1.
const index = myarr.indexOf(1);

// Creates and return a new string by concatenating the elements of an array
const newarr = myarr.join();

// slice(startIndex,EndIndex):- Extracts and returns a copy of the portion of original array. The Endindex is exclusive.
const arr1 = myarr.slice(1,3);
// console.log(arr1);

// Splice(StartIndex, EndIndex):- Extracts the portion from the original array. It manupilates the original array. The EndIndex is inclusive.
const arr2 = myarr.splice(1,3);
// console.log(arr2);

const marvel_heroes = ["Thor","IronMan","Black Panther"];
const dc_heroes = ["Batman","Superman","Flash"];
// It takes dc_heroes array as a single element and added it to the marvel_heroes array.
// marvel_heroes.push(dc_heroes);

// Combines two or more arrays. This method returns a new array without modifying existing arrays.
const all_heroes = marvel_heroes.concat(dc_heroes);
// console.log(all_heroes);

// Spread Operator (...) :- It unpacks or spreads the individual items inside an array , String or an Object.
const all_new_heores = [...marvel_heroes,...dc_heroes]
// console.log(all_new_heores);

const anotherarr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// Flat(depth) :- return a new array by concatenating the subarray recursively upto a specific depth.
const usuablearr = anotherarr.flat(2);
// console.log(usuablearr);

// Array.isArray(Value) :- Determines wheather the pass value is array or not.
// Array.from(Value) :- Creates a new shallow copied array from an iteratable or array-like object.

// Returns an empty array. We have to specify that we wnat array of the key or value.
console.log(Array.from({name:"Raghav"}));// Interesting case for interviews.

let score1 = 100;
let score2 = 200;
let score3 = 300;

// creates a new instance of array.
const newlyarr = Array.of(score1,score2,score3);
// console.log(newlyarr);


