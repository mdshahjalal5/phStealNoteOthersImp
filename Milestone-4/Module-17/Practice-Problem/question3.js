// ** You are given three numbers 13, 79, and 45. Write a program that will print the largest number using if-else.
// ? Q(1)
let numberOne = 133;
let numberTwo = 79;
let numberThree = 5;

if (numberOne > numberTwo && numberOne > numberThree) {
    console.log(`${numberOne} is largest`);
} else if(numberOne < numberTwo && numberTwo > numberThree){
    console.log(`${numberTwo} is largest`);
} else{
    console.log(`${numberThree} is largest `);
}


//? Q(2) You are given a triangle with the sides 9, 8, 9. Write a program to check whether a triangle is Isosceles or not using if-else.

let handOne = 8;
let handTwo = 8;
let handThree = 9;

if (handOne === handTwo || handOne === handThree || handTwo === handThree) {
    if(handOne === handTwo && handTwo === handThree){
        console.log(`Iso na`)
    } else {
        console.log(`Yes Isosceles`);
    }
    
} else{
    console.log(`No Isosceles`);
}

