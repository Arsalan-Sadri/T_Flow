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

// FUNCTION
function greeting(name: string): string {
    return `Hello ${name}!`;
}

console.log(greeting("Arsalan"));
