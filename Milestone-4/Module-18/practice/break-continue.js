// *Break
const fruits = ['Mango','Banana','Kiwi','Apple']

for (let i = 0; i < fruits.length; i++) {
    const fruit = fruits[i];

    // ** Amra kiwi pailei r konno fol khabo na

    if (fruit === 'Kiwi') {

        break;
        
    }

    console.log(fruit);
}

console.log('-----------');

for (let i = 0; i < fruits.length; i++) {
    const fruit = fruits[i];

    // ** Amra kiwi skip korte chai

    if (fruit === 'Kiwi') {

        continue;
        
    }

    console.log(fruit);
}

const numbers = [11,2,22,12,354,53,12,4,33,77,8,88,99,43];

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];

    if (number > 100) {
        continue;
    }

    console.log(number);
    
}