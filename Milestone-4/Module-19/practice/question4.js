// 4) Write a function called odd_even() which takes an integer value and tells whether this
// value is even or odd. You need to do it in 4 ways:
// ● Has return + Has parameter
// ● No return + Has parameter


// const odd_even = (number) => (number % 2 === 0 )? console.log(`${number} is even`):console.log(`${number} is odd`);

// odd_even(7);



function odd_even(number) {
    if (number % 2 === 0) {

        return "EVEN"
        
    } else{
        
        return "ODD"
    }
}

// ** No retun Output

// odd_even(10)

// ** With return output


console.log(odd_even(10));