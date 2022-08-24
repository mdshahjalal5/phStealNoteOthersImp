// ** function declaration 

function add (first,second) {

    return first + second;

}

console.log(add(20,30));


// ** function expression

// ** why its called as expression bcz at the right side we declare the function and when its called we store that value in the add1 variable

const add1 = function add1(first,second) {
    return first + second;
}

console.log(add1(20,30));

// ** arrow function

const add3 = (first,second) => first + second;

console.log(add3(20,30));

