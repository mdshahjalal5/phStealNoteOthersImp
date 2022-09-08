// ** 1) If I write []==true,will it show true or false? Check it out.

// if ('true' === true) {
//     console.log('true')
// } else {
//     console.log(false)
// }

//** */ 3) Write an arrow function that will take a parameter and will check if the parameter is a number or not by using isNaN(). And return true or false.

// console.log(typeof 4)

const number = num => {
    if (typeof num === 'number') {
        console.log('Number')
    } else{
        console.log('No Number')
    }
}

number(true)