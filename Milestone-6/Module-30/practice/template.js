// ** template literal **

// ** 3 ways to write strings

const personOne = 'Adam Mofiz';
const personTwo = "Peter Parker";
const personThree = `Abul Hasan`

// ** If you want to write in multiline with the help of \n new line and single quate

const myStr = personOne + ' ' + personTwo + ' ' + personThree +' '+ '\n' +
'My boy \n' +
'he is goood'

console.log(myStr);


const myNewString = `My name is ${personOne} and my fav carechter is ${personTwo}`;

console.log(myNewString);

// ** Dynamic interpolation

const add = (first,second) => `Answer is : ${first+second}`;

console.log(add(20,30));


const fullName = (firstName,lastName) => `The full name is : ${firstName} and the last name is : ${lastName} and the full is : ${firstName+lastName}`;

console.log(fullName(personOne,personTwo))