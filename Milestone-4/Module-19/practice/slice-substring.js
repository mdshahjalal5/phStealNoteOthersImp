const fruits = ['Mango','Apple','Kiwi','Banana'];

const numbers = [21,55,34,56,7,83];

let myString = 'I love Allah';

// * Slice existed in array 

// console.log(fruits.slice(1,3));

// ** Substring 
// ** Includes

console.log(myString.substring(7));

// * Array Mutable 

fruits[1] = 'Bangi';

console.log(fruits);

// ** String is no changable it's immutable 

console.log(myString[7]);

myString[0] = 'T';

console.log(myString) //* String is not iterable and it's immutable

// ** includes method present in both array and string 

console.log(myString.includes('love'));

console.log(fruits.includes('Bangiiii'));

console.log(myString.lastIndexOf('A'))


console.log(myString.split(' '))


const fruitsNew = '  Ajaira limited    '

console.log(fruitsNew.repeat(5))

console.log(fruitsNew);



console.log(fruitsNew.trim());

console.log(fruitsNew.split(' ').reverse());
