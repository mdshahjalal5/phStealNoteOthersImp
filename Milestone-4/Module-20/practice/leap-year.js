// ** Leap year -> 

// ** 1. if the year is divided by 4 and returns no vagsesh then its a leap year 
// ** 2. if the year is divided by 100 and returns no vagsesh it's not a leap year 
// ** 3. if the year is divided by 400 and no vagsesh its a leap year

function isLeapYear(year) {
    if (year % 4 === 0 && year % 100 !== 0) {
        return true;
    } else if (year % 4 === 0 && year % 100 === 0) {

        if (year % 400 === 0) {
            
            return true;
        }
    }

    return false;
}



console.log(`isLeapYear: ${isLeapYear(2000)}`);