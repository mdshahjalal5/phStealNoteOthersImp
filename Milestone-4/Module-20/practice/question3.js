// ** Write a function findOddSum() that will take the array [5, 7, 8, 10, 45, 30] as the input parameter and will return the sum of the odd numbers.

// ** step by step solve of addition of oddNumbers from an array 

const numbers = [21,32,4,44,56,78,91,45,57,87];

// ** Step 1-> Amra ekta function likhbo ja jekono number from an array add korbe
const numbersSum = (numbers)=>{
    
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];

        sum += number;
        
    }

    return sum;

}


// ** Step 2-> Amra eikhane ekta function likhbo ja ekta array theke Odd numbers khuje ber korbe and take ekta notun array er moddhe store korbe

const oddNumbers = (numbers)=>{
    const oddNumArray = [];

    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        number % 2 !== 0 ? oddNumArray.push(number) : null;
    }

    return oddNumArray;
}

const myOddNumbers = oddNumbers(numbers);

console.log(numbersSum(myOddNumbers));
