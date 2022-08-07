// ** Simple interest calculation -> formula A = P(1+rt)


// ** interest rate 

// ** principle amount = 20000, principle amount + Interest = 22000; time = 4years 


function InterestRate(principleAmount,timeInYear,rate) {

    // ** Simple Interest

    const interestGotBack = principleAmount * rate * timeInYear;

    // ** Compound interest

    const compoundInterest = principleAmount * (1+rate/12) ** timeInYear*12;

    return compoundInterest;

}


let interestRateCon = 8/100;

console.log(InterestRate(3000,1,interestRateCon))