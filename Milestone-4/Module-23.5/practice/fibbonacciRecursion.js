// ** Fibbonacci recursion -> fibo seq - > 0 1 1 2 3 5 8 13 21


// const fibo = [0,1]

// fibo[2] = fibo[2-1] + fibo[2-2]

// fibo[n] = fibo[n-1] + fibo[n-2]


function fibo (number){

    if (number < 2) {
        
        return number;
    }

    return fibo(number-2) + fibo(number-1);
}


console.log(fibo(10));