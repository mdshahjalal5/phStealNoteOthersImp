// * PASS BY VALUE AND PASS BY refference

let num1 = 3;
let num2 = 3;

const multiply = (num1,num2)=>{
    num1 = 4;
    return num1 * num2; // 12
};

console.log(num1) // 3 //** */ non-premitive value er khetre function scope er vitor amra variable er value change korlew ta baire chage hobe na

console.log(multiply(num1,num2)) 

// ** But

let arr1 = [21,22,23]
let arr2 = [21,22,23]

const doSomething = (arr1,arr2)=>{
    arr2.push(333);
    console.log(arr2)
}

doSomething(arr1,arr2) 

console.log(arr2) //** */ Premitive value er khetre function scope er vitor amra array or object er value modify korle ta bairew change hobe bcz egla refferance type value