// ** Largest number of an array

const numbers = [10,32,21,26,99,76,99,89,99,99,89,32,99];

const largestNumber = (numbers)=>{

    let largestNum = numbers[0];

    for (const number of numbers) {
        
        if (number > largestNum) {
            
            largestNum = number;
        }
    }

    return largestNum;
}


const allTheLargestNumbers = (numbers)=>{

    const arr = [];

    const largestNumberFromArray = largestNumber(numbers);

    for (const number of numbers) {
        if (numbers.includes(largestNumberFromArray)) {
            arr.push(largestNumberFromArray);
            const indexOfLargestNumber = numbers.indexOf(largestNumberFromArray);
            numbers.splice(indexOfLargestNumber, 1);
        }
    }

    

    return arr;
   


    // const arr = [];

    // const firstLargestNum = largestNumber(numbers);

    // arr.push(firstLargestNum);

    // const firstLargestNumIndex = numbers.indexOf(firstLargestNum);

    // numbers.splice(firstLargestNumIndex,1);

    // for (let i = 0; i < numbers.length; i++) {
    //     if (numbers.includes(firstLargestNum)) {
    //         const largestNumbers = largestNumber(numbers);
    //         arr.push(largestNumbers);
    //         const LargestNumIndex2 = numbers.indexOf(largestNumbers);
    //         numbers.splice(LargestNumIndex2,1);
    //     }
    // }
    
    

    // return arr;
}


const result = allTheLargestNumbers(numbers);

console.log(result);