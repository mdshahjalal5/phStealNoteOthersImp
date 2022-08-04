// ** Update of an Object

const myTableHas ={

    noteBooks : 4,
    pen: 7,
    calculator: 1,
    mouse:1,
    computer:2
}

console.log(myTableHas);

// ** Update using DOT notation

myTableHas.computer = 6;

console.log(myTableHas);

// ** Update using Bracket notation

myTableHas['computer'] = 3;

console.log(myTableHas);

// ** Update using Dynamic Property name as variable notation

const propertyValueWillChange = 'computer';

// ? Jodi amra dynamically access korte chai tahole obossoi amader bracket notation use korte hobe


myTableHas[propertyValueWillChange] = 20;

console.log(myTableHas);


