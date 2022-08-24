// ** let and const

// ** connot re-declare and re-assign
const numbers = [12,32,13,44,68,123];

// ** But 

numbers.push(333); //todo push kore new ekta number dhukaite partesi karon amra je jaigai const ta declare kora hoisilo oitar j address oita change hosse na but oi address ei amra new value add remove and update korte partesi

console.log(numbers);

let money = 25; 

// let money = 100; ---> SyntaxError: Identifier 'money' has already been declared

money = 35; // ** jei address a ager value silo oita update korte partesi re-assign korte partesi but notun kore declare korte partesi na 


// ** But in var both re-assign and re-declare is possible

var money2 = 100;

var money2 = 120;

money2 = 22;
console.log(money2)