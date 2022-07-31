// You are given an array:

// var fruits = ['Apple', 'Banana', 'Orange'];

// a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
// b) Remove ‘Orange’ and add ‘Watermelon’.

let fruits = ['Apple','Banana','Orange'];

// (a) indexOf -> Banana
console.log(fruits.indexOf('Banana'));

// (b) remove Orange and add Watremelon

fruits.pop();

console.log(fruits);

fruits.push('Watermelon');

console.log(fruits)