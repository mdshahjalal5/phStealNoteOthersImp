// **object-dynamicProps

const shoppingCart = {
    books: 12,
    pen:22,
    sunGlass:2,
    bottle:9
};

// * Keys()

const keys = Object.keys(shoppingCart);

console.log('keys:', keys);

// * values() 

const value = Object.values(shoppingCart);

console.log(`value: ${value}`);

console.dir(value);


// * entries()

const keyValue = Object.entries(shoppingCart);

console.log(`keyValue: ${keyValue}`);

console.dir(keyValue)

// ** Make an Object iterable

// *keys: [ 'books', 'pen', 'sunGlass', 'bottle' ]

// for (let index = 0; index < keys.length; index++) {
//     const propertyName = keys[index];

//     console.log(propertyName,shoppingCart[propertyName]);

    
// }

// ** use of for in loop */

// for (const key in shoppingCart) {
//     console.log(key);

//     console.log(key,shoppingCart[key]);
// }

const entries = Object.entries(shoppingCart);

for (const entry of entries) {
    const key = entry[0];
    const value = entry[1];

    console.log(key,value);
}