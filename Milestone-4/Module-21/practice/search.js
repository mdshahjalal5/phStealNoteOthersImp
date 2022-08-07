// ** Searching inside an array

const lyrics = 'Tumi Bondhu Kala Pakhi, ami jeno k, boshonto batashe amra kala kala sada sada';

// ** Includes -> string er vitor search er jonno

// pakhi ase kina khuje dekhbo

const searchingString = 'Pakhi';
const searchingString2 = 'pakhi';

const pakhiExist = lyrics.includes(searchingString);
const pakhiExist2 = lyrics.includes(searchingString2);

console.log(pakhiExist); //true -> case sensitive
console.log(pakhiExist2); //false -> case sensitive

// ! If I want to ignore the case sensitive

const pakhiExistCaseInsensitive = lyrics.toLowerCase().includes(searchingString.toLowerCase());
const pakhiExistCaseInsensitive2 = lyrics.toLowerCase().includes(searchingString2.toLowerCase());

console.log(pakhiExistCaseInsensitive); // true -> case insensitive
console.log(pakhiExistCaseInsensitive2); // true -> case insensitive

// ***************-----------***************

// ** indexOf()

const indexOfKala = lyrics.indexOf('kala');

console.log(indexOfKala);

indexOfKala !== -1 ? console.log('Kala exists') : console.log('Kala not exist') ;

// ** startsWith() and endsWith()

const myFileName = 'kamrul.png';
const myPictureName = 'kamrulPic.jpg';

myFileName.endsWith('.pdf') ? console.log('Its a pdf file') : console.log('Invalid file format');
myPictureName.endsWith('.jpg') ? console.log('Its a jpg file') : console.log('Invalid file format');

