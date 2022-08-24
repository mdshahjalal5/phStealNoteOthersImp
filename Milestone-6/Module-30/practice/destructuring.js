// ** Destructuring **

const Person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 33,
    email: function(){
        return `${this.firstName}${this.lastName}@gmail.com`
    },
};


// ** Normal system a amra protita Person object er property er jonno same name a variable declare kore tar modhhe value store korsi

// const email = Person.email();
// const age = Person.age;

// console.log(age)
// console.log(email)

// ** destructuring ekta way ase

// **** const {variable same as the property name hote hobe} = Person;

const {age,...rest} = Person;

console.log(age);
console.log(rest);

// ** Array destructuring a difference holo jekono name use kora jabe object er moto same property name as variable use korte hobe na - i mean kono baddho badhokota nai

const [king,last,notun] = ['sakib','bappi','raj'];

console.log(notun)

