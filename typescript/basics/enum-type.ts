// enums

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

// enum Role {
//   ADMIN = "ADMIN",
//   READ_ONLY = 100,
//   AUTHOR = 5,
// }

const person = {
  name: "Eric",
  age: 27,
  hobbies: ["Guitar", "Soldering"],
  role: Role.ADMIN,
};

if (person.role === Role.ADMIN) {
  console.log("User is admin");
}
