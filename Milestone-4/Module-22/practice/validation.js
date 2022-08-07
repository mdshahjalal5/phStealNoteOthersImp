//  ** Input error handaling

const add = (a,b)=> typeof a !== 'number' || typeof b !== 'number'? `Please enter a valid Number` : a+b;

const result = add('12',12);

console.log(result);


// ** NaN error debug

const multiply = (a,b)=> a*b;

const result2 = multiply(12,"false");

console.log(result2);


