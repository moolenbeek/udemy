// types

// number type

function add(number1: number, number2: number, showResult: boolean) {
  console.log(`type: ${typeof number1}`);

  // this js method gets type at runtime
  // if (typeof number1 !== 'number' || typeof number2 !== 'number') {
  //     throw new Error('Incorrect input!')
  // }

  if (showResult) {
    console.log(number1 + number2);
  }
  return number1 + number2;
}

const number1 = 10;
const number2 = 5;
const printResult = true;

const result = add(number1, number2, printResult);
console.log(`result: ${result}`);
