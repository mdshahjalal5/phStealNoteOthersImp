// ** reduce

// Task: multiply all the numbers and return the result

const numbers = [2,3,4,6,4,2];

const numberMultiply = (numbers) => numbers.reduce((previousValue,currentValue,currentindex,array) => previousValue * currentValue,1);

console.log(numberMultiply(numbers));

// ** Task 2 : add all the numbers

const addAll = (numbers) => numbers.reduce((previousValue,currentValue)=> previousValue + currentValue,0);

console.log(addAll(numbers));

// ** make a large concate string

const strings = ['I am','a','Developer']

const largeString = (strings)=> strings.reduce((previousValue,currentValue)=> `${previousValue} ${currentValue}`,'');

console.log(largeString(strings));