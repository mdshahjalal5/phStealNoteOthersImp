// ** 8 ways of undefined

// <!-- ? 1. let variable; -> kono value set korla na will return undefined -->

let number;

// console.log(number);

// <!-- ? 2. function(a,b)=>{const total = a+b } -> kono kisu return korla na will give you undefined -->

function add (a,b){
    const total = a+b;
};

// console.log(add(3,2))

// <!-- ? 3. function(a,b)=>{const total = a+b; next line a just return kore dila but ki return korla ta bolla na } -> will give you undefined -->


function addNew (a,b){
    if (a < 0 || b < 0) {
        return;
    };

    return a+b;
};

// console.log(addNew(-2,5))

// <!-- ? 4. abar kono function(a,b,c,d){return a+b+c+d} -> korla but function(declare er time a just a and b param pass korla tahole kintu undefined return korbe) -->

function addMultiple (a,b,c,d){

    return a,b,c,d;

};

// console.log(addMultiple(1,2))

// <!-- ? 5. const person = {name:'Hasan', age:23} -> but tmi console.lag(person.job) -> jehetu job property exist e kore na undefined return korbe -->

const person = {name:'Hasan',age:23};

// console.log(person.job)

// <!-- ? 6. const numbers = [1,2,4] -> console.lag(numbers[100] -> je index exist e kore na or vitor thaka element tmi access korte chaile undefined return korbe) -->

const numbers = [1,2,4];
// console.log(numbers[100])

// <!-- ? 7. jodi tmi kono ekta array element delete numbers[1] kore dau and then console.lag(numbers) -> koro tahole oi index jake tmi delete korso tmk empty dekhabe -> eivabe kora uchit na tmi splice use korba in this case -->



delete numbers[0];

// console.log(numbers) // [ <1 empty item>, 2, 4 ] should not do this use splice to delete any value

// <!-- ? 8. const eighth = undefined -> tmi explicitly set kore dite paro jodi tmi korba na -->

const name = undefined;
// console.log(name)
// ** Use of null
// <!-- ? Consider tmr kase kono value nai tmi explicityly bolte chau tmi undefined use na kore null use korba -->
// <!-- ? typeof undefined -> undefined dibe -->
// <!-- ? typeof null will return object -->