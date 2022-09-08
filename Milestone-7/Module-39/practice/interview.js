// ** 1) If I write []==true,will it show true or false? Check it out.

[] == true ? console.log('true') : console.log('false') ; // ** differnt type converted type coersion

//** */ 2) Use === to check if the true === "true" gives true or false.

true === 'true' ? console.log('true') : console.log('false')

//** */ 3) Write an arrow function that will take a parameter and will check if the parameter is a number or not by using isNaN(). And return true or false.

const isNaNCheck = parameter => (typeof parameter) === 'number' ;

console.log(isNaNCheck(23))

// ** 4

let storeFalsyValue = true;
if(!storeFalsyValue) {
console.log(`Nothing to show!`);
}
else {
console.log(`You are amazing!`);
}

// ** 5. Write an arrow function that will take 3 parameters (first two parameters will be numbers and the third parameter will be a string) that will perform arithmetic operation depending on the third parameter and will print the result. For example:

// 1. Print result of num1+num2 if operation is “add”
// 2. Print result of num1-num2 if operation is “subtract”
// 3. Print result of num1*num2 if operation is “multiply”
// 4. Print result of num1/num2 if operation is “divide”
// 5. Print result of num1%num2 if operation is “modulus”
// 6. Else print “Invalid operation”


// const calculator = (number1, number2, operation)=>{

//     if (operation === 'add') {
//         return number1 + number2;
//     } else if (operation === 'substract'){
//         return number1 - number2
//     }
//      else if (operation === 'multiply'){
//         return number1 * number2
//     }
//      else if (operation === 'divide'){
//         return number1 / number2
//     }
//      else if (operation === 'modulus'){
//         return number1 % number2
//     } else{
//         return `Invalid Operation`
//     }
    
// };

// console.log(calculator(2,2));

const calculator = (num1,num2,operation) => {
    switch (operation) {
        case 'add':
            return num1 + num2
            ;
        case 'substract':
            return num1 - num2
            ;
        case 'multiply':
            return num1 * num2
            ;
        case 'divide':
            return num1 / num2
            ;
        case 'modulus':
            return num1 % num2
            ;
    
        default:
            return `Invalid Operation`
            ;
    }
}

console.log(calculator(2,2,'add'))


// 1) Tell the difference Between Primitive and Non-Primitive Data Types in JavaScript.
// 2) What are the Truthy and Falsy values? Give me some examples.
// 3) What is the difference between null and undefined?
// 4) What are the differences between double equal (==) and triple equal (===)?
// 5) What is scope in JavaScript?
// 6) Define block scope and global scope.

// COMMON INTERVIEW QUESTIONS

// 7) What is hoisting in JavaScript?
// 8) How to use the JavaScript callback function?
// 9) Explain closure in JavaScript
// 10) Explain passed by value and passed by reference.