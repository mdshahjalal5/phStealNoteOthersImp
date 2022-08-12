// ** fibbonacci sequence -> 0 1 1 2 3 5 8 13

// fibo[2] = fibo[2-1] + fibo[2-2]

const fibo = [0,1];

for (let i = 2; i <= 25; i++) {
    
    fibo[i] = fibo[i-1] + fibo[i-2];
}

console.log(fibo);