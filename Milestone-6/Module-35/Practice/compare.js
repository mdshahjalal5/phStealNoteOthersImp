// const first = {a:5,b:2,c:5};
// const second = {a:5,b:2,c:5};

// const third = first;

// first === second ? console.log('same') : console.log("different"); // result different ashbe bcz tader refference different
// first === third ? console.log('same') : console.log("different"); // result same ashbe bcz first k amra third a ssign korsi sothat tader refference value same and inside value o same

// ** Donot use this one

// const firstString = JSON.stringify(first);
// const secondString = JSON.stringify(second);

// const first = {a:5,b:2,c:5};
// const second = {a:5,b:2,c:5};
// firstString === secondString ? console.log('Same') : console.log("different") // same ashbe

// const first = {a:5,b:2,c:5};
// const second = {a:5,c:5,b:2};
// firstString === secondString ? console.log('Same') : console.log("different") // different ashbe jodio same ase vitore jinish just ordering change hoise

// ** Compare objects using keys

const first = {a:5,b:2,c:5};
const second = {a:5,c:5,b:2};

const firstKeys = Object.keys(first);
const secondKeys = Object.keys(second);

const compareObjects = ()=>{
    if (firstKeys.length === secondKeys.length) {
    
        for (const keys of firstKeys) {
           if (first[keys] !== second[keys]) {
                return false
           }
        }
        return true;
    } else{
        return false
    }
};

console.log(compareObjects());