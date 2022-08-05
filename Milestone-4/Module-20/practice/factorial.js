// ** factorial -> 7! -> 1*2*3*4*5*6*7 -> ek theke oi sonkha porjonto gun bangla vashay 
// ? Ashole ei ta oi sonkha theke 1 porjonto gun 7! = 7*6! ei vabe o venge venge likha jai


const factorial = (number) => {
    let multiplicationTotal = 1;

    for (let i = number; i >= 1; i--) {
        
        multiplicationTotal *= i; 
    }

    return multiplicationTotal;
}

console.log('factorial:', factorial(7));