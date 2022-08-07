//* Write foo, bar, foobar if divisible by 3 or 5 or both


const number = 30;

const fooBar = (number)=>{

    if (number % 3 === 0 && number % 5 === 0) {
        return `fooBar`;
    } else if(number % 3 === 0){
        return `foo`;
    } else if(number % 5 === 0){
        return `bar`;
    } else {
        return `Not divisible`;
    }

    // if (number % 3 === 0) {

    //     if (number % 5 === 0) {
    //         return `fooBar`
    //     }

    //     return `foo`;
        
    // } else if (number % 5 === 0){
    //     if (number % 3 === 0) {
    //         return `fooBar`
    //     }

    //     return `Bar`;
    // }
}


const result = fooBar(number);

console.log(result);