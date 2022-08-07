// ** Reverse word 

const myString = 'I am a good person';

function reverseWord(myString){

    const splitedArray = myString.split(' ');

    const reversedArray = [];

    // [ 'I', 'am', 'a', 'good', 'person' ]

    for (let index = splitedArray.length-1; index >= 0; index--){
        const element = splitedArray[index];
        
        reversedArray.push(element);

        
    }

    const reversedString = reversedArray.join(' ');

    return reversedString;

    
}


const result = reverseWord(myString);

console.log(result);