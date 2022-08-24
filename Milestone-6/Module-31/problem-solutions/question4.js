// ** You have an array [ 1, 9, 17, 22 ]. Add the all elements of this array and give output. Do this using for loop & array.reduce() method.

const numbers = [ 1, 9, 17, 22];

const addArrayElements = (numbers)=>{
    let sum = 0;
    for (const number of numbers) {
        sum+=number;
    }

    return sum;
};

console.log(addArrayElements(numbers));

// using Reduce

const addArrayElements2 = (numbers)=> numbers.reduce((previousValue,currentValue)=> previousValue+currentValue,0);

console.log(addArrayElements2(numbers));