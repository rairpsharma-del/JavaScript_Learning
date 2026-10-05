/* 
    {} :- we called this scope 
    Scope determines the accessibility and visibilty in the different parts of the code.            
    do not confuse this with object. when it is written with some control statement it is SCOPE.
    Inside this block is block scope and outside is Global Scope.
*/

/*
    The key difference between scope in Node and Console(DEV_Tool in browser) is that in NODE the file is wrapped with a hidden function wrapper
    while in console it does not. so in Node if you globally declare something it cannot be accesed by some other file until explicitly export.
*/

if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Raghav";

    function two(){
        const website = "Youtube"
        // console.log(username);
    }
    // console.log(website)
    two();
}

one()


// Example:-
/*
    Closure:- The combination of function bundled together with its surrounding state.
*/
function addone(num){
    return num+1;
}

console.log(addone(5));
/*
    Hoisting:- A behaviour in javascript where the interpreter allocates memory for variables, function and class and import declarations
    during setup phase before executing the code.
*/
const addtwo = function(num){
    return num +2;
}

console.log(addtwo(5));