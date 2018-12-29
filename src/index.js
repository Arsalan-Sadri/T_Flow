// @flow

// VARIABLES
let name: string = "John Doe";
let age: number = 23;
let users: string[] = ["David", "John", "Alan"];
let ids: number[] = [34, 32, 31];
let hasCourses: boolean = true;
let someting: any = [1, 2, "three"];

// INTERFACE
interface Person {
    name: string;
    age: number;
    hasKids?: boolean;
}

let person: Person;
person = {
    name: "Kate",
    age: 45
};

// FUNCTIONS
function greeting(name: string): string {
    return `Hello ${name}!`;
}
console.log(greeting("Arsalan"));

function mixedInput(value: string | number) {
    return 1;
}
console.log(mixedInput("true"));

// UTILITY TYPES
type Suit = "Diamonds" | "Clubs" | "Spades";
const diamonds: Suit = "Diamonds";
const clubs: Suit = "Clubs";
// const hearts: Suit = "Hearts"; This will generate error
