/*
    This keyword :- Refers to the current context.
    in Node envoirnment "This" refers to an Empty Object.
    The global object in browser is window object.
    Therefore in browser "This" refers to window object.
*/
const user = {
    username:"raghav",
    price:999,
    welcomeMessage : function(){
        console.log(`${this.username},welcome to the website`);
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

/*
    Inside a function when we log "This" keyword standalone then it refers to a global object
*/

// refers to global object
// function one() {
//     console.log(this);
// }
// one()


// returns undefined cannot refer to anything.
// function one() {
//    console.log(this.username);
// }
// one()


const addtwo = (num1,num2) => {
    return num1+num2;
}

console.log(addtwo(3,4));