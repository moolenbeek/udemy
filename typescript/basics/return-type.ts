// return types & void

const add = (a: number, b: number) => {
  return a + b;
};

// no return statement is void type
const printResult = (num: number): void => {
  console.log("Result: " + num);
};

printResult(add(5, 12));
