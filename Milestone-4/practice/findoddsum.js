// ** Write a function findOddSum() that will take the array [5, 7, 8, 10, 45, 30] as the input parameter and will return the sum of the odd numbers.

const numbers = [5, 7, 8, 10, 45, 30];

const findOddSum = (numbers)=> {

    const oddNumbers = [];
    let sum = 0;

    for (const number of numbers) {
        number % 2 !== 0 && oddNumbers.push(number);
    }

    

    for (const odd of oddNumbers) {
        sum += odd;
    }

    return sum;
}



console.log(findOddSum(numbers))