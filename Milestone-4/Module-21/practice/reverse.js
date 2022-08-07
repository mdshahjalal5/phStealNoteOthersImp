// ** Reverse a string and also words using for loop


const myString = 'I am a good person';

function reversed(myString) {

    let reversed = '';
    for (let i = myString.length-1; i >= 0; i--) {
        let element = myString[i];
        
        reversed = reversed + element;
    }

    return reversed;
   
}

const result = reversed(myString);
console.log(result);