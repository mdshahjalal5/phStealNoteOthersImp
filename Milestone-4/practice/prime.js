// ** Prime number ২. কোন একটা সংখ্যা প্রাইম সংখ্যা (prime number) কিনা। সেটা চেক করার একটা ফাংশন লিখো। 

const primeNumber = (number)=>{

    let isPrime = true;

    if (number === 1) {
        return `${number} is not a prime number and not a composite number`
    } else if (number > 1){
        for (let i = 2; i < number; i++) {
            
            if (number % i === 0) {
                isPrime = false;
            }
        }
    }

    if (isPrime) {
        return `${number} is a prime Number`
    } else {
        return `${number} is not a prime Number`
    }
}


console.log(primeNumber(11));
