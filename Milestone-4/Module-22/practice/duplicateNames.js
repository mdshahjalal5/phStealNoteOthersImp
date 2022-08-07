// ** Duplicate not using set in an Array

const names = ['abul','babul','kabul','cabul','abul','kabul','babul','dabul','cabul','abul'];

const uniqueNames = (names)=>{

    const uniques = [];

    for (const name of names) {
        uniques.includes(name) === false ? uniques.push(name) : 'Do Nothing';
    }

    return uniques;
}


const result = uniqueNames(names);

console.log(result);