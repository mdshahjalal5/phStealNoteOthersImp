// ** Interview Question Soltions (https://drive.google.com/file/d/1knz40KGXTqQuZ_7wege3tboJePbMt3Xb/view)

// ? call stack -> When the web's v8 engine where the interpreter lies(which converts the high level js code to machine readable code) runs a script then if any function calls occurs it add it to the call stack if it finds any other function or code to execute it add that above of that function call stack and executes when the second function which was inside of it returns it out of the call stack and js again returns to the first function and starts execution.

//? in a call stack every thing happens cronologically and when the final return occurs the call stack actually cleared out the the stacks. if the function calls exited the call stack limit the call stack overflowed

// ** Tell us about Try-catch?

// ** If you are running any application at any point if any bug occurs than it will stop execution , so that the consumers will have a difficult user experience or no experience at all. To mitigate this probelm try catch and finally comes into play. If you presume there might some problem will happen in your code such as loading data from the fetch api there could be some error while getting the data you put it in try block and initialise the catch block to capture that error.Now let's tall about finally term inside finally you put some piece of code no matter what happens to your code you must execute some of the code , that code goes into the finally block.

// ** Name some console APIs.

// ? 1.console.log()
// ? 1.console.clear()
// ? 1.console.debug()
// ? 1.console.error()
// ? 1.console.time()
// ? 1.console.warn()
// ? 1.console.trace()
// ? 1.console.table() to see the fetched data from api
// ** There are few more visit -> https://developer.mozilla.org/en-US/docs/Web/API/console

// ** What is syntax error?

// ? Any syntactically wrong expression in the code, or something that programming language syntactically don't understand is syntactical error

// ** When do we get reference error?

// ** When any veriable or the function is not defined but we console it or invokes it then it will give us refferance error

//? a) what is wrong with the code below:
var foo; //** undefined */

//! b) What type of error will the code generate?
console.log(foo.bar);//** type error */ can't find the properties of undefined// undefined er kono property hoi na . Jokhon kono array or object a r kono index value or property amra access kore jai but it has different data type or it dosen't belong there we get type error
//todo c) What is the correct way to write the code?

console.log(foo.bar)

// ** If we want to find any property from an object we need to specify the object with let or const so that they don't get hoist and set the value as undefined and in case of undefined which is not an object we could not get the property

// const number = 6;

// console.log(numbers);

