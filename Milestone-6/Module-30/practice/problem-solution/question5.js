// ** Write an arrow function where it will do the following: a) Square each array element b) Calculate the sum of the squared elements c) Return the average of the sum of the squared elements Print the result.

const numbers = [2,4,6];

const square = (numbers)=> {
    let sum = 0;
    for (const number of numbers) {
        const squareValue = Math.pow(number, 2);
        sum += squareValue;
    }

    const avg = sum / numbers.length;

    return avg;
};

console.log(square(numbers));