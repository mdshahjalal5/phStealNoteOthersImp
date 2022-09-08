// ** Syntax error

// ** Syntactical jekono vul syntax error dibe

// const numbers = [ 34,44,32; //SyntaxError: Unexpected token ';'

// console.log(numbers)

// ** Type error

const student = {name:'Hasan',age:20};

// console.log(student.id) //** undefined */

// console.log(student()) //TypeError: student is not a function


// let numbers 

// console.log(numbers[100]) //TypeError: Cannot read properties of undefined (reading '100')


// ** Refferance error

const add = (a,b)=>{
    totat = a+b + totat; //ReferenceError: Cannot access 'totat' before initialization
    let totat = 7;
    return totat;
};

console.log(add(2,5)) //ReferenceError: totat is not defined