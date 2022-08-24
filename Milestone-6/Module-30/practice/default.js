

// case 1
// const add = (first,second) => first + second;

// console.log(add(10,20));

// * jodi amra parameter er arguments (value provide na kori)

// const add = (first,second) =>{
    // console.log(first,second) //undefined undefined
    // * Before ES6 kivabe default set kora hoto
    // second = second || 0;
    // console.log(first,second) // 10 undefined
    // console.log(first,second) //10 0 for second = second || 0
    // return first + second; 
// };


// console.log(add()) // NaN

// console.log(add(10)); // NaN

// ** Now in ES6 we can set default values if we want directly jokhon kono arguments pathano hobe na tokhon e sudhu default execute hobe

const add = (first=0, second=10) => first + second;

console.log(add()) // 10
console.log(add(10)) // 20
console.log(add(12,50)) // 62
