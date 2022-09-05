// ** color code matching

// const text = '#2A2A2A';
const text = '01712567894'; //** Phone number match -> +88-01712567894 */

// const regx = /#?([\dA-Fa-f]{2})([\dA-Fa-f]{2})([\dA-Fa-f]{2})/g
const regx = /(\+88)?-?01[1-9]\d{8}/g

const matches = text.match(regx);
const replaced = text.replace(regx,'Phone');
const test = regx.test(text)
const search = text.search(regx); //returns index

console.log(matches);
console.log(search);
console.log(test);
console.log(replaced);