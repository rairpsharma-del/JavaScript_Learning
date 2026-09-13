
const name = "Raghav";
const title = "Sharma";

const age = 21;

// Modern way of String Interpolation.
/*
    String Interpolation :- The process of putting variable values directly inside a string literal.
    Wrapper Class:- A special Class which encapsulates or wraps the primitive data type into objects.
*/
//console.log(`Hello my name is ${name} ${title} and my age is ${age}`);


const GameName = new String(`Sekiro: Shadows Die twice.`)


// last index is not included 
// we cannot give negative indexing to the substring function.It will take it as 0.
const newString = GameName.substring(0,7);
// console.log(newString);


// We can take negative index as an argument in the slice fucntion.
const anotherString = GameName.slice(-20,22);
// console.log(anotherString);

const newstring = "   raghav   "
// console.log(newstring);
// console.log(newstring.trim());

const url = "https://Raghav,com/raghav%20sharma"
//console.log(url.replace('%20','-'));

//console.log(url.includes('raghav'));

// split(separator) or split(separator,limit);
console.log(GameName.split(':'));











