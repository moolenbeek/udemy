// union type

const combine = (a: number | string, b: number | string) => {
    let result;
    if (typeof a === 'number' && typeof b === 'number'){
        result = a + b;
    } else {
        result = a.toString() + b.toString();
    }
    return result;
}

const combineNumber = combine(20, 30);
console.log(combineNumber);

const combineString = combine('hello ', 'world');
console.log(combineString);