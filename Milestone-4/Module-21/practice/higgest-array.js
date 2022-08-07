// ** Write a function to find the highest number in an Array
// ** One Approach

const numbers = [21,27,432,45,99,458,998];

function higgestNumber(numbers){

    const sortedNumbers = numbers.sort((a,b) => a-b);

    console.log(sortedNumbers);

    return numbers[numbers.length-1];
}

function minimumNumber(numbers){

    const sortedNumbers = numbers.sort((a,b) => b-a);

    console.log(sortedNumbers);

    return numbers[numbers.length-1];
}


const result = higgestNumber(numbers);
const result2 = minimumNumber(numbers);

console.log(result);
console.log(result2);