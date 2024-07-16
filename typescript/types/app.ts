// types

// number type

function add(number1: number, number2: number, showResult: boolean, phrase: string) {

  // this js method gets type at runtime
  // if (typeof number1 !== 'number' || typeof number2 !== 'number') {
  //     throw new Error('Incorrect input!')
  // }

  const result = number1 + number2;
  if (showResult) {
    console.log(phrase + result);
  }
  return result;
}

const number1 = 10;
const number2 = 5;
const printResult = true;
const resultPhrase = 'Result is: ' 

add(number1, number2, printResult, resultPhrase);