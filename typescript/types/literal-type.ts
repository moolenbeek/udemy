// literal type

const combine = (
  a: number | string,
  b: number | string,
  resultConversion: 'as-number' | 'as-text'
) => {
  let result;

  // runtime type check
  if (typeof a === "number" && typeof b === "number" || resultConversion === 'as-number') {
    result = +a + +b;
  } else {
    result = a.toString() + b.toString();
  }

  return result;

//   if (resultConversion === "as-number") {
//     return +result;
//   } else {
//     return result.toString();
//   }
};

const combineNumbers = combine(20, 30, "as-number");
console.log(combineNumbers);

const combineStringNumbers = combine("20", "30", "as-number");
console.log(combineStringNumbers);

const combineStrings = combine("hello ", "world", "as-text");
console.log(combineStrings);