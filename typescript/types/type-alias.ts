// type alias

type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

const combine = (
  a: Combinable,
  b: Combinable,
  resultConversion: ConversionDescriptor
) => {
  let result;

  if (
    (typeof a === "number" && typeof b === "number") ||
    resultConversion === "as-number"
  ) {
    result = +a + +b;
  } else {
    result = a.toString() + b.toString();
  }

  return result;
};

const combineNumbers = combine(20, 30, "as-number");
console.log(combineNumbers);

const combineStringNumbers = combine("20", "30", "as-number");
console.log(combineStringNumbers);

const combineStrings = combine("hello ", "world", "as-text");
console.log(combineStrings);



type User = { name: string; age: number };

const greet = (user: User) => {
  return `Hello ${user.name}`;
};

console.log(greet( { name: 'Eric', age: 27 }));