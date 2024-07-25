// function types and callbacks

const add = (a: number, b: number) => {
  return a + b;
};

const printResult = (num: number): void => {
  console.log("Result: " + num);
};

const addAndHandle = (a: number, b: number, cb: (num: number) => void) => {
  const result = a + b;
  cb(result);
};

printResult(add(5, 12));

let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
  console.log(result);
});
