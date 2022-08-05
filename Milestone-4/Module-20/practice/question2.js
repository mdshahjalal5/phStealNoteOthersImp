// ** Write a function findLeapYear() that will take the array [2023,2024,2025,2028,2030] as the input parameter and will check if each year is a leap year. If a year is a leap year insert that year in a new array, return the new array and print the result.


const leapYears = [2023,2024,2025,2028,2030];

function findLeapYear(leapYears){

    const myLeapYears = [];

    for (let i = 0; i < leapYears.length; i++) {
        let year = leapYears[i];

        if (year % 4 == 0 && year % 100 !== 0) {
            myLeapYears.push(year);
        } else if (year % 4 === 0 && year % 100 === 0) {
            if (year % 400 === 0) {
                myLeapYears.push(year);
            }
        }
        
    }
    return myLeapYears;
}

console.log(findLeapYear(leapYears));