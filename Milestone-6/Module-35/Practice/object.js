// **1. Object literals

const person = {
    firstName : 'jhon',
    lastName : 'Doe',
    age:32
};


person.car = "BMW";

console.log(person);

// ** 2. Object making using class 

// ? Blueprint of a House


class House{

    name = "Nahar vila"

    constructor(material,established){
        this.material = material
        this.established = established
    }
};


const myHouse = new House('cement','2023');

// ** Prototypical chain object


const mySecondHouse = Object.create(myHouse);

console.log(mySecondHouse.name) //* --> as er nijer kono key and values nai tai retun kore faka {} object

console.log(mySecondHouse.material);

// ** Object using constructor method

const dog = new Object();

dog.name = 'Lucia';

console.log(dog);

// ** using function create object

const cat = function(name){
    this.name = name;
};

const myCat = new cat('Sajia');

console.log(myCat)