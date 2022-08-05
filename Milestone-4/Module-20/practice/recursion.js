// ** Recursion 

// ? What is recursion -> if we call a function inside that function its called recursion

// ** Suppose we want to add 1+2+3 ---> n number 

// todo for loop aproach

// n+f(n-1) = f(n)

// let num = 3;


// function recursion(num) {

//     return num === 0? 0 :num+recursion(num-1);
// }


// console.log(recursion(3))

// ** Recursion fibonnaci sequence 


function fibbonicci(num){
    return num < 2 ? num: fibbonicci(num-1)+fibbonicci(num-2);
}

console.log(fibbonicci(4))