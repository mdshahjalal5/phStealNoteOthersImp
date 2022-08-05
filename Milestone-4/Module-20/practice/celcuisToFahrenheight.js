// ** 2 function celceuis to fahrenheit
// ? Fahrenheit to celceuis

const celceuisTofahrenheit = (temp,convertTo)=> convertTo === "fahrenheit" && ((temp*9/5)+32) || convertTo === "celsius" && ((temp-32)*5/9);

console.log(celceuisTofahrenheit(290,"celsius"))


// ** Inch to feet conversion

const inchtoFeet = (inches)=> 1/12*inches;

console.log(`inch to feet : ${inchtoFeet(222)}`);

// ** Miles to kilometers conversion

const milesToKilometers = (miles)=> miles*1.609;

console.log(`Miles to km: ${milesToKilometers(10)}`)