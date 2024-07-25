// arrays

const person = {
  name: "Eric",
  age: 27,
  hobbies: ["Guitar", "Soldering"],
};

console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

let favoriteActivities: string[];
favoriteActivities = ["Guitar", "Soldering"];

console.log(favoriteActivities);
