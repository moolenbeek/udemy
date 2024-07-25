// tuples

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Eric",
  age: 27,
  hobbies: ["Guitar", "Soldering"],
  role: [2, "author"],
};

person.role = [1, "admin"];

console.log(person.role);
