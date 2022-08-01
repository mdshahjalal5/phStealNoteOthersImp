// ** reverse for and while loop

const fruits = ['Mango','Kiwi','Banana','Apple'];

// ** Loop variable

let lengthOfArr = fruits.length;

// console.log(lengthOfArr);

// console.log('Length')

// while (lengthOfArr>=0){
//     console.log(fruits[lengthOfArr-1]);
//     lengthOfArr--;
// }

for (let i = lengthOfArr-1; i >= 0; i--) {
    const fruit = fruits[i];

    console.log(fruit);
    
}