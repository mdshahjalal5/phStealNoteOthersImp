// ** Closoure

// ** Outer function
const stopWatch = ()=>{
    let counter = 0;
    // ** inner function
    return function(){
        counter ++ 
        return counter;
    }
};

const watch1 = stopWatch(); // jokhon 1st time amra outer function k call kortesi tokhon counter er value 0 hosse eita inner function take return korbe and counter variable er value set korbe 0

console.log(watch1()) // ei line a amra inner function k call korlam
console.log(watch1()) // ei line a amra inner function k call korlam
console.log(watch1()) // ei line a amra inner function k call korlam
console.log(watch1()) // ei line a amra inner function k call korlam

// ** every call a amra watch1 er man 1 kore baralam

const watch2 = stopWatch() // ei khane amra abar outer function k call korlam , ei call ei function abar notun kore counter variaable er man 0 set kore felbe and inner function k return korbe

console.log('Watch2:', watch2());
console.log('Watch2:', watch2());
console.log('Watch2:', watch2());
console.log('Watch2:', watch2());
console.log('Watch2:', watch2());
console.log('Watch2:', watch2());
console.log('Watch2:', watch2());
console.log('Watch2:', watch2());
console.log('Watch2:', watch2());

const watch3 = stopWatch() // stopWatch initialised again for the watch3

console.log('Watch3:', watch3());
console.log('Watch3:', watch3());
console.log('Watch3:', watch3());
console.log('Watch3:', watch3());


// **** last verdict

console.log('Watch1:', watch1()); //** watch 1 has differnt counter value , also watch2 and watch3. kono tar sathe kono tar counter i mean outer function er variable er value er mil nai , tai tader prottek er couser er value vinno */
console.log('Watch2:', watch2());
console.log('Watch3:', watch3());
