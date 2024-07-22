// function as type

const add = (a: number, b: number) => {
  return a + b;
};

const printResult = (num: number): void => {
  console.log("Result: " + num);
};

printResult(add(5, 12));

let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(8, 8));
