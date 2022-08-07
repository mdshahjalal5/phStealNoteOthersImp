// ** typeOf Array

const myCountry = 'Bangladesh';
const age = 52;
const isIndependent = true;
const add = (a,b)=> a+b;
const myFriend = {
    fName: 'Friend',
    age:52
}

const friendsAge = [22,32,12,43,22,21];


console.log(typeof myCountry);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof add);
console.log(typeof myFriend);
console.log(typeof friendsAge); // array kew object datatype dekhay so asholei array check korar upay
console.log(Array.isArray(friendsAge));

// ** Includes and indexOf()

console.log(friendsAge.includes(21)); //true
console.log(friendsAge.includes(50)); //false


friendsAge.indexOf(50) !== -1 ? console.log('Ase') : console.log('Nai');
friendsAge.indexOf(21) !== -1 ? console.log('Ase') : console.log('Nai');


const newFriendAge = [100,232,321,224,546];

console.log(newFriendAge.concat(friendsAge));