// ** Write an arrow function where it will do the following: a) It will take two array inputs b) Combine the two arrays and assign them in a new array c) Find the maximum number from the new array and return the result Print the result.

const array1 = [32,54,66,898,999];
const array2 = [2,5,6,8,99,333,888];

const maxNumber = (array1,array2) => {

    const newArray = [...array1, ...array2];
    const maxNumber = Math.max(...newArray);

    return maxNumber;

}

console.log(maxNumber(array1,array2));