// ** Recap 

// ** Var let const 

// ** Var hoisting hoi

// ** let and const block scope

// ** let k re declare kora jai na  But re-assign kora jai

// ** const k ek sathe declare and assign korte hoi no redeclare and reassign

// ** calculate salary -> arrow function and default parameters

const salaryTotal = (salary,tax=0.25,bonus=0)=> salary - salary*tax + bonus;

console.log(salaryTotal(20000));

// ** speared operators

const fruits = ['Manogo','Banana','Kiwi','Apple'];

// ** Array copy using speared operators

const fruitsNew = [...fruits];


console.log(fruitsNew)
console.log(fruitsNew.pop())

// ** find Max / Min

const numbers = [21,44,567,898,999];

console.log(Math.min(...numbers));

// ** Destructuring

const Person = {
    firstName: 'John',
    lastName: 'Doe',
    age:33
}


const {firstName, lastName} = Person;

// ** Destructuring and Rest
const {ages:friendsAge,...rest} = {x:5,y:66,firstName:'Abul',ages:[33,44,54]};


console.log(friendsAge);


console.log(firstName,lastName)

console.log(rest);

// function min(nums) { 
//     return Math.min(nums) 
//     }
// console.log(min( [1,3,2 ]));

// const {x, y, z} = {x: 1, y1: 2, z: 3};

// console.log(y)

const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
console.log(output);