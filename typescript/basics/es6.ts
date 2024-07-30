// let and const

const userName = "Eric";
let myAge = 28;

myAge = 27;

// arrow function

const add = (a: number, b: number) => {
  return a + b;
};

console.log(add(7, 7));

const sum = (a: number, b: number) => a + b;

console.log(sum(6, 6));

const printOutput: (a: number | string) => void = (output) =>
  console.log(output);

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", (event) => console.log(event));
}

// default function parameters

const multiply = (a: number, b: number = 1) => {
  return a * b;
};

console.log(multiply(5, 5));
console.log(multiply(5));

// spread operators

const hobbies = ["Swimming", "Walking"];

const myActiveHobbies = ["Biking", ...hobbies];

const activeHobbies = ["Biking"];
activeHobbies.push(...hobbies);

console.log(activeHobbies);

const person = {
  firstName: "Eric",
  age: 27,
};

const personCopy = { ...person };

// rest parameters

const addNumbers = (...numbers: number[]) => {
  return numbers.reduce((currentResult, currentValue) => {
    return currentResult + currentValue;
  }, 0);
};

console.log(addNumbers(2, 5, 1, 7, 3.5));

// array and object destructuring

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobbies, hobby1, hobby2);

const { firstName, age } = person;
