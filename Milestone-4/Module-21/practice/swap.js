
let a = 5;
let b = 10;

let temp;

temp = a;

a = b;

b = temp;

console.log(a, b);

// ** without temp using destructuring

[b,a] = [a,b]

console.log(a, b);
