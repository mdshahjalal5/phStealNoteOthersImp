// ** Write a function to find the highest number in an Array

const numbers = [21,27,432,45,99,458,998];

function lowestNumber(numbers) {

    let lowestNumber = numbers[0];

    for (let index = 0; index < numbers.length; index++) {
        const number = numbers[index];
        
        if (number < lowestNumber) {
            lowestNumber = number;
        }
    }

    return lowestNumber;

}

function highestNumber(numbers) {

    let higgestNumber = numbers[0];

    for (let index = 0; index < numbers.length; index++) {
        const number = numbers[index];
        
        if (number > higgestNumber) {
            higgestNumber = number;
        }
    }
    return higgestNumber;

}

const result = lowestNumber(numbers);
const result2 = highestNumber(numbers);
console.log(result);
console.log(result2);