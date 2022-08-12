// ** Recursion vs loop

// let sum = 0;

// for (let i = 1; i <= 5; i++) {
//     sum += i;
// }


// for (let i = 5; i >= 1; i--) {
//     sum += i;
// }

// console.log(sum);

// ** now recursive way

function sum (number){

    // console.log(number);

    if (number === 1) {
        return number;
    }

    return number + sum(number-1);
}


console.log(sum(5));


