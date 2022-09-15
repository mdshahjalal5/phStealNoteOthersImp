// ** copy an array and make a new array . Then filter the first array without phone

const products = [
    { name: 'laptop', price: 3200, brand: 'len', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'HTC', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sungalss', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];

// ** copy an array and add a new element

const newProducts = [...products,{ name: 'webcame', price: 3200, brand: 'len', color: 'silver' }];

// console.log(newProducts)

// ** phone bade shob element k pete chai

const filteredProducts = products.filter(product => product.name !== 'phone');

console.log(filteredProducts)
