// ** scope

function add (a,b){
    console.log(sum) // ei jonno 3 no karone eitar value return kore undefined
    // const total = a+b; // total is defined only inside the function so it will be assecible only inside the function
    var total = a+b; // total is defined only inside the function so it will be assecible only inside the function in case of var as well
    if (b > 2) {
        var sum = a+b+20; // * 3 var jehetu hoist hoi tai eita function body er ekdom upore hoist hoye giye as undefined declare hoi and ei line jokhon execute korar jonno ashe tokhon tokhon er value sum a set hoye jai
    }
    console.log(sum)
    console.log(a,b)
    return total;
};

// console.log(total); //  total is not defined
console.log(add(4,5))