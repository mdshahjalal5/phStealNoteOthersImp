// ** Before map

const numbers = [22,3,4,5,6,7];

function double(numbers){

    const numbersDoubled = [];
    for (const number of numbers) {
        
        const result = doubleTheNumber(number);
        numbersDoubled.push(result);
    }

    return numbersDoubled;
}

const doubleTheNumber = number => number * 2;

console.log(double(numbers));

// ** But this could be done very efficiently using the map method 

const doubleIt = (numbers) => numbers.map(number => number * 2);

console.log(doubleIt(numbers));


const randomMapExample = (numbers) => numbers.map((number,index,array) => {
    console.log(number);
    console.log(index);
    console.log(array);
});

randomMapExample(numbers);

const fiveTimes = (numbers)=> numbers.map((number)=> number * 5);

console.log(fiveTimes(numbers));