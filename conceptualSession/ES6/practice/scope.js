// ** scope in js

// ** 3 types of scope

// 1. global scope
// 2. function scope
// 3. block scope

// ** global scope can be accessed from any where in the code
let salary = 300000;

if(true){
    const sum = 0
    salary = 20000;
    console.log(salary+sum);
    // ** sum is only accessable inside the block scope
    // ** but local scope e kono kisu var diye declare korle take baire access kora jai bcz of hoisting
}

// ** since sum is defined in the block scope of the if thats why its not accessaable
console.log(sum) //ReferenceError: sum is not defined

let addition = 2000;

const add = (){

    // ** jodi same name a variabale block scope er vitor declare and assign kora hoi tahole only ta ei khanei karjokor hobe 

    // ** But jodi amra global variabale access korte chaitam tahle ta eikhanew partam but jokhon e same namae hoise eita vitorer ta kei access korbe

    let addition = 3000;

    const total = 1000;

    return total + 20 ;
    // ** in functional scope apni jei variable e declare koren na keno ta var use kore korle take baire access kora jabe na 

    // also in function scope total can be only accessed here
}