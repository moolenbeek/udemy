// types

function add(
  number1: number,
  number2: number,
  showResult: boolean,
  phrase: string
) {
  // this js method gets type at runtime
  // if (typeof number1 !== 'number' || typeof number2 !== 'number') {
  //     throw new Error('Incorrect input!')
  // }

  const result = number1 + number2;
  if (showResult) {
    console.log(phrase + result);
  }
  return result;
}

const number1 = 10;
const number2 = 5;
const printResult = true;
const resultPhrase = "Result is: ";

add(number1, number2, printResult, resultPhrase);

// type inference (best practice)
// typescript infers the data types when declaring variables, it is not necessary to declare

const num1 = 5;
const text = "hello world";
const isBool = true;

// type inference (bad practice)
// this will run but is considered redundant and unecessary

const num2: number = 5;
const moreText: string = "hello world";
const isBoolean: boolean = true;

// objects

// object types infered by typescript (best practice)
const person1 = {
  name: "Eric",
  Age: 12,
};

console.log(person1.name);
console.log(person1);

// object types declared explicitly (bad practice)
const person2: {
  name: string;
  age: number;
} = {
  name: "Joe",
  age: 20,
};

console.log(person2.name);
console.log(person2);

// arrays

const hobbies = ["Guitar", "Coding"];

// any type array
let favoriteHobbies: any[];
favoriteHobbies = ["Guitar", 1];

// string array
let myFavoriteHobbies: string[];
myFavoriteHobbies = ["Guitar", "Coding"];

// object and array
const cat = {
  name: "Luna",
  age: 7,
  colors: ["White", "Brown", "Black"],
};

console.log(cat.name);

/* typescript is using type inference to determine that the 
color array is of type string allowing the use of toUpperCase */

for (const color of cat.colors) {
    console.log(color.toUpperCase());
}