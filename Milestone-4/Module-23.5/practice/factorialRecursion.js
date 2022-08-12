// ** factorial -> of 5 jodi hoi -> 5*4*3*2*1


function factorial(number){

    if (number === 1) {
        return number;
    }

    return number * factorial(number-1)
}

console.log(factorial(5))