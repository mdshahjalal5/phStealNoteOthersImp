// ** function hoisting
console.log(addition) //** var er name ta declare holo and hoisting holo but tokhon eitar man as function set hoi nai tai return kore undefined */
console.log(add(6,7)) //** jehetu function itselft hoist hoi tai eikhane return kore 13 */
// console.log(addition(6,7)) //**  addition is not a function return korbe */
console.log(addition(6,7)) //**   Cannot access 'addition' before initialization for const return this */
console.log('function hoisting')
// function add(a,b) {
//     return a+b;
// }
// var addition = function add(a,b) {
//     return a+b;
// }
const addition = function add(a,b) {
    return a+b;
}