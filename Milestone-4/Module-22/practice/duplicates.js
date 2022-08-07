// ** Duplicates Items remove

const numbers = [12,13,14,22,53,55,22,55,66,44,66,44];

const newArray = [];

for (const number of numbers) {

    console.log(number);
    
    if (newArray.includes(number)===false) {
        newArray.push(number);
    }
}

console.log(newArray);