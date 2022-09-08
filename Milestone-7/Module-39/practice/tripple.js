// ** == Vs ===

// ! Case 1

// const first = 2;
// const second = 2;

// if (first == second) {
//     console.log('They are same')
// } else{
//     console.log('They are not same')
// }
// ? Case 2 

// if (first === second) {
//     console.log('They are same')
// } else{
//     console.log('They are not same')
// };

// ** Case 3 

// ** cheking value + type both
// const first = 2;
// const second = '2';

// if (first === second) {
//     console.log('They are same')
// } else{
//     console.log('They are not same')

// ** Case 4
// ** checking only the value
// const first = 2;
// const second = '2'; // In this case double equal convert the type of string in multy layer functionality and then check it or compare it -> this conversion is called type coersion

// if (first == second) {
//     console.log('They are same')
// } else{
//     console.log('They are not same')
// }

// ** Case 5 

// const first = 0;
// const second = false; // Due to type coersion it changes to 0 and output they are same returns

// if (first == second) {
//     console.log('They are same')
// } else{
//     console.log('They are not same')}


// ** Non-premitive comparisons

// const first = {};
// const second = {};
// // ** All the variables has differnt refference value == and === checks only the refference of the Non-primitive type values
// const third = [];
// const forth = [];

// if (first === second && third == forth) {
//     console.log('They are same')
// } else{
//     console.log('They are not same')
// }
const first = {};
const second = first;
// ** All the variables has same refference value == and === checks only the refference of the Non-primitive type values and return They are same
const third = [];
const forth = third

if (first === second && third == forth) {
    console.log('They are same')
} else{
    console.log('They are not same')
}