// ** You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ]. Now convert this array into an even array (array with even numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map() method. Hints: add one to any odd number and it will become an even number.


const oddArray = [1, 3, 5, 7, 9];

function convertToEvenArray(oddArray){
    const evenArray = [];
    for (const element of oddArray) { 
        evenArray.push(element+1);
    }

    return evenArray;
};

console.log(convertToEvenArray(oddArray));

const evenArrayMap = (oddArray)=> oddArray.map(number => number + 1);

console.log(evenArrayMap(oddArray));