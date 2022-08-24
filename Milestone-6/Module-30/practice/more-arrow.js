// ** single parameter

const doubleIt = num => num * 2;

console.log(doubleIt(4)) //8

//* this keyword conflict regular vs arrow

const Person = {
    firstName: 'John',
    lastName: 'Doe', 
    fullName: ()=> `${this.firstName} ${this.lastName}`, // undefined undefined return korbe global object k this hisabe bujhbe, jehetu global object a firstName, lastName nai tai undefined return korbe
    fullName2 : function(){
        return `${this.firstName} ${this.lastName}`; //Jhon Doe return korbe this bolte ei object a function ta call kora hoise oita k bujhbe
    }

}

console.log(Person.fullName2());

// ** arrow function a same 2 ta parameter name neya jabe na

// const add = (a,a) => a+a;

// console.log(add(2,2)) //SyntaxError: Duplicate parameter name not allowed in this context

const add2 = function (a,a){
    return a+a; // regular function will not throw exception
}

console.log(add2(2,2)) 