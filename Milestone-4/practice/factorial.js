// ** 1 - that number multiply


const factorial = (number) => {

    let fact = 1;

    for (let i = 1; i <= number; i++) {
        
        fact *= i;
        
    }

    return fact;
}

console.log('factorial:', factorial(5));