// ** date compare

const today = new Date();

console.log(today);

const year = document.getElementById('date').innerText = today.getTime();

console.log(typeof year,'in ms');

// ** compare two dates
//  system first convert the dates into ms and then compare 
//  the older date has less ms than the new date

const independaceDay = new Date('1971-03-26');
const victoryDay = new Date('1972-12-16');

// ** compare two dates

independaceDay.getTime() < victoryDay.getTime() ? document.getElementById('date').innerText  = "Independance Day was before" : document.getElementById('date').innerText  = "victory Day was after";