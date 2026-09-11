// JavaScript automatically converts String into Number.
// Not a good way of comapring data.
console.log("2">1);

/*
    Note:- The "==" operator and the comparison operator works differently.
    the comparison operator converts null to the value 0 then it prints the output of the comparison.
*/
console.log(null>0);
console.log(null==0);
console.log(null>=0);

console.log(undefined == 0);

// Strict Check "===" :- it checks data as well as data tyoe also.