const num1 = 227;
const num2 = 231;
const num3 = 220;

function maxNumber(num1,num2,num3) {
    return (`largest Number: ${Math.max(num1,num2,num3)}`);
}

function minNumber(num1,num2,num3) {
    return (`Smallest Number: ${Math.min(num1,num2,num3)}`);
}

const result = maxNumber(num1,num2,num3);
const result2 = minNumber(num1,num2,num3);


console.log(result);
console.log(result2);