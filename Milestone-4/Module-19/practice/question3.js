// **Challenging: Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.


const make_avg = (numbers,numbersLength) => {
    let sum = 0;

    for(let i=0; i<numbersLength; i++){
        let number = numbers[i];
        sum += number;   
    }
    const avarageValue = sum / numbersLength;
    return avarageValue;
}

const numbers = [21,23,44,53,34,100,200];
const numbersLength = numbers.length;


const result= make_avg(numbers,numbersLength);

console.log(result);

