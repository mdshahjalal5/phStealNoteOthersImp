// ** Statycally typed programming languages

// ? Where the typr of the variables explicitly mentioned
// ** int a = 5
// ** string name = 'Hasan'
// ** object student =  {name:'noya daman'}
// ** int[] numbers = [12,13,14]
// ** string[] friends = ['kamrul','hasan'];
// ** bool c = True


// ** Dynamically typed language

// ** Premitive data types
const number = 23;
const boolean = true;
const name = 'Hasan';

// ** Non-premitive data types/ composite data types
const numbers = [12,42,21];
const student = {name:'Hasan',id:1};
const friends = ['kamrul','Hasan']


console.log(typeof number, typeof boolean, typeof name,Array.isArray(numbers), typeof student, Array.isArray(friends));