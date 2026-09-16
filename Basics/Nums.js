// JS automatically detects this as a Number
const score = 82;

// Explicitly defining the data type as Number
const balance = new Number(100);

console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const hundreds = 10000000;
console.log(hundreds.toLocaleString("en-IN"));

// Maximum number possible
console.log(Number.MAX_VALUE);

// Minimum Number Possible
console.log(Number.MIN_VALUE);
