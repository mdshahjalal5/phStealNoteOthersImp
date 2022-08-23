// ** range error (when something not in the range)

// ** usuallly not in range hole error dibe
const numbers = [3,4,6,7];

numbers.length = 2;

console.log(numbers.length)
console.log(numbers[600]); // undefined

// ** eval error (we did not see)

// ** syntax error

// if the syntax is wrong

// for (let i = 0; i < numbers.length i++){
    
// }

// ** type error

// let number = 123;

// console.log(number.toUpperCase())

// const student = {};

// console.log(student.name.city)

// ** refference error

// console.log(number) //ReferenceError: Cannot access 'number' before initialization

// let number = 20;

// ** we can create new error using the error constructor
// ? new Error();