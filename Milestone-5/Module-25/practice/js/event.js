//option-1

// <!-- ** System -1  -->
//         <button
//           type="button"
//           onclick="document.body.style.backgroundColor = 'red'"
//         >
//           Red
//         </button>

// option-2

const makeBlue = ()=> document.body.style.backgroundColor = 'blue';

// option-3
const makePurple = ()=> document.body.style.backgroundColor = 'purple';

const purple = document.getElementById('purple');

purple.onclick = makePurple;

// option-4

const green = document.getElementById('green');

green.onclick = ()=> document.body.style.backgroundColor = "green";

// ** Option-5

// Mal take dhorbo

const orangeButton = document.getElementById('orange');

const makeOrange = ()=> document.body.style.backgroundColor = 'orange';

orangeButton.addEventListener('click',makeOrange);

// option-6

const pink = document.getElementById('pink');

pink.addEventListener('click', ()=> document.body.style.backgroundColor = 'pink');

// ** Option-7 final one (very often we'll use it)

document.getElementById('goldenrod').addEventListener('click', ()=> document.body.style.backgroundColor = 'goldenrod');