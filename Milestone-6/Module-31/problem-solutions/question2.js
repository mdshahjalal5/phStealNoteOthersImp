// ** You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now return/get all the elements which are divisible by 10 using array.filter() method.

const numbers  = [33, 50, 79, 78, 90, 101, 30];


// ** filter all the numbers which are 10 divisible ! need to use a condition 
// ** for filter and find you must use a condition

const divisibleByTen = (numbers) => numbers.filter(number=> number%10 === 0 );

console.log(divisibleByTen(numbers));

questions-3
// ** find method returns the first number which is divisible by ten
const divisibleByTenFind = (numbers) => numbers.find(number=> number%10 === 0);

console.log(divisibleByTenFind(numbers));
