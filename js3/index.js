//Number

// An integer is a whole number
const myNumber = 42;

// A number with a decimal point is a float which references the floating point
const myFloat = 42.01;

const myString = "42";

const myName = "Ofure";

const Trail = "55.15jjjjjjj";

console.log(myNumber === myFloat);

console.log(myNumber === myString);

console.log(Number(myString));

console.log(Number(myName));

console.log(Number.isInteger(myString));

console.log(Number.isInteger(myFloat));

console.log(Number.isInteger(myName));

console.log(Number.parseFloat(myString));

console.log(Number.parseFloat(Trail));
