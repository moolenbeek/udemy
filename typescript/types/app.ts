// types

// number type

function add (number1: number, number2: number) {
    console.log(`type: ${typeof number1}`);

    // this js method gets type at runtime
    // if (typeof number1 !== 'number' || typeof number2 !== 'number') {
    //     throw new Error('Incorrect input!')
    // }
    return +number1 + +number2;
}

const number1 = 10;
const number2 = 5;

const result = add(number1, number2);
console.log(`result: ${result}`);