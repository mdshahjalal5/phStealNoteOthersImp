// ** Second largest Number

// ** First find Out the largest Number

const numbers = [23,43,54,66,77,82,21,999,3,29,100];

const largestNumber = (numbers)=>{

    let largestNumber = numbers[0];

    for (const number of numbers) {
        
        if (number > largestNumber) {
            
            largestNumber = number;
        }
    }

    return largestNumber;
}

const seconLargestNumber = (numbers)=>{

    let largeNumberIndex = numbers.indexOf(largestNumber(numbers));

    numbers.splice(largeNumberIndex,1);

    // numbers[largeNumberIndex] = 0;

    let secondLarge = numbers[0];

    for (const number of numbers) {
        if (number > secondLarge) {
            secondLarge = number;
        }
    }

    return secondLarge;

}

const result = seconLargestNumber(numbers);

console.log(result);