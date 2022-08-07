// ** You have 3 numbers and find the largest one

const num1 = 227;
const num2 = 231;
const num3 = 220;

if (num1 > num2 && num1 > num3) {
    console.log(`${num1} is largest`);
} else if(num2 > num1 && num2 > num3) {
    console.log(`${num2} is largest`)
} else {
    console.log(`${num3} is largest`)
}