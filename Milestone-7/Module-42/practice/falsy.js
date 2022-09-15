// ** falsy

const num = null;
// !num && console.log('Falsy value ');


// ** String to Number
const myLove = false

const stringToNumber = +myLove;

// console.log(stringToNumber)

// ** Number to string

const num2 =2;

// console.log(num2 + '');

// ** Button toggler 

let isActive = true;

const showDisplay = ()=> console.log('showDisplay');
const hideDisplay = ()=> console.log('hideDisplay');

isActive ? showDisplay() : hideDisplay();

// ** to toggle something

isActive = !isActive;
