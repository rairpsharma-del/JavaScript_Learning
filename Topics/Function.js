/*
    Fucntion:- A reusable block of code designed to do a specific task.
    instead of writing a same code again and again we wrap it inside a fucntion and call it whenever needed.
    Undefined behaves likes false when evaluated inside conditional statement like If.
*/

function addTwoNumbers (number1,number2){
    let result = number1+number2;
    return result;
}

const result = addTwoNumbers(3,4);
// console.log(result);


function loginUserMessage(username){
    if(username===undefined){
        console.log("Please Enter a username!");
        return
    }
    return `${username} Just Logged In!`
}

console.log(loginUserMessage("Raghav")); 
// rest operator
function calculateCartPrice(...num){
    return num;
}

console.log(calculateCartPrice(200,300,400));

const user = {
    item:"PS5",
    price:56000,
}

function print(anyobject){
    return `The item is ${anyobject.item} and the price is ${anyobject.price}`
}

console.log(print(user));

