// ** string-comparison-immutable.js


const myName = 'Kam rul ';

// ** String access 

// ** At this point we tried to replace the ' ' white space with the 'H' but bcz its immutable it dosen't change
myName[3] = 'H';

console.log(myName);

console.log(myName[3]);

// ** Immutable but refference value can change

let firstName = 'Hasan';

// ** Here refference value changed in the memory so that the new value have the new refference point that why it can cancate but it's immutable
firstName = firstName + ' ' + myName;

console.log(firstName);

// ** toUpperCase() and toLowerCase() + toLocale()

const emailAddress = 'hasan@gmaiL.com';

const confirmEmail = 'hasan@gmail.coM'

emailAddress.toLowerCase() === confirmEmail.toLowerCase() ? console.log('Email Valid'): console.log('Email not valid');
emailAddress.toLocaleLowerCase() === confirmEmail.toLocaleLowerCase() ? console.log('Email Valid'): console.log('Email not valid');

// ** Whern to use toLocaleLowerCase() -> jokhon local time Zone er onijaye kono info pass kora lagbe tokhon




