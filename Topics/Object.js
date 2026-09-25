/*
    Object Literal :- A Comma separated list of key-value pairs wrapped in curly braces ("{}") used to create and initializ an object directly.
    When objects are created using constructor method the singleton is created.
*/
const mysym = Symbol("Key1")
const JSuser = {
    name:"Raghav",
    [mysym]:"Value1",
    age:21,
    location:"Bihar",
    email:"Raghav@gmail.com",
    "isLoggedIn":true,
    lastLoginDays:["Monday","Tuesday"]
}

// Ways to access data stored in object.
// console.log(JSuser.name);
// console.log(JSuser["email"]);
// Only way of accessing the data of object is the key is declared as String.
// console.log(JSuser["isLoggedIn"]);
// Only of accessing the data of the object if the data type of key is Symbol.
// console.log(JSuser["mysym"]);

// Overwrite the data of the object.
JSuser.email = "RaghavSharma@gmail.com";
// freezes the object so that no change can be made in the object.
// Object.freeze(JSuser);
// The Changes stated below will not be prpagated as the object is freezed.
JSuser.email = "Gojo@gmail.com"

JSuser.greeting = function(){
    console.log("Hello Js User");
}
// returns the refrence of the fucntion.
// console.log(JSuser.greeting);

// will call the function.
// console.log(JSuser.greeting());

// Object De-structuring

const courseObject = {
    courseName:"javascript",
    price:"999",
    courseInstructor:"Raghav",
}

const {courseInstructor:instructor} = courseObject;
console.log(instructor);

/*
    API:- Set of rules and protocols which allows the application to share data and communicate with each other.
    It act as middleman, it takes your request and send it to server and then returns a response mostly in json format.
*/


