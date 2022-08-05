
const factorial = (number)=>{

    let multiplicationTotal = 1;

    let i = number;

    while(i>=1){

        multiplicationTotal = multiplicationTotal*i;

        i--
    }

    return multiplicationTotal;
}

console.log(factorial(9));