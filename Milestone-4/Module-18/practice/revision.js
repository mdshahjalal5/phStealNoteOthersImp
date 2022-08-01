// ** Revisions

// Var declaration
let bottle = 'water';
let bottoleColor = 'Blue';

let penPrice = 200;
let isExpensive = true;

// Array
const fruits = ['Mango','Banana','Kiwi'];

console.log(fruits.length);

fruits.pop();
fruits.push('pineapple');

fruits.unshift('Blackberry');
fruits.shift();

conole.log(fruits[1]);

fruits[2] = 'apple';

// Conditionals 

if(isExpensive){
    console.log(`Expensive`);
} else if((penPrice>=200 && bottoleColor === 'Blue') || bottle !== 'water'){
    console.log('Print something')
}