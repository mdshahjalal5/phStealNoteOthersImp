// ** Prime or Not

const number = -1;

function primeNumber(number){
    let isPrime = true;

    if (number === 1) {
        return 'Not a prime nor composite number';        
    } else if (number > 1){
        for(let i = 2 ; i < number ; i++){
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
    } else {
        return `Number is not a prime number`;
    }

    if (isPrime) {
        return `${number} is a prime number`;
    } else {
        return `${number} is not a prime number`;
    }
}


const result = primeNumber(number);

console.log(result);