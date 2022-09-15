const products = [
    { name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sungalss', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];

// ** use of maps

// ** get all the brands in an array

const brands = products.map(product => product.brand);

console.log(brands);

// ** colsole.log() - all the name of the products

// products.forEach(product => console.log(product.name));

// ** filter the object of array which values are more than 5000 taka

const filteredProducts = products.filter(product => product.price < 5000);

console.log(filteredProducts)

// ** find a specific product

const producWeNeed = products.find(product => product.price < 1000);

console.log(producWeNeed);