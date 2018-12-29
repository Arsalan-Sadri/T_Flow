let name = "John Doe";
let age = 23;
let users = ["David", "John", "Alan"];
let ids = [34, 32, 31];
let hasCourses = true;
let someting = [1, 2, "three"];

// INTERFACE


let person;
person = {
    name: "Kate",
    age: 45
};

// FUNCTIONS
function greeting(name) {
    return `Hello ${name}!`;
}
console.log(greeting("Arsalan"));

function mixedInput(value) {
    return 1;
}
console.log(mixedInput("true"));

// UTILITY TYPES

const diamonds = "Diamonds";
const clubs = "Clubs";
// const hearts: Suit = "Hearts"; This will generate error