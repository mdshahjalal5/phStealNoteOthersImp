// ** forEach

const friends = ['Tom Hanks','Tom Holands','Tom brady','Tom Solaiman'];

// friends.forEach(friend => friends.push(friend));

friends.forEach(friend => console.log(friend + 'Alu'));

friends.forEach(friend => friends.push(friend));

console.log(friends)


const products = [
    {id:1,name:'Laptop',price:34000},
    {id:2,name:'Mobile',price:4000},
    {id:1,name:'Cycle',price:3000},
    {id:1,name:'Tablet',price:69000},
]


// ** increase the product price 10%

products.forEach(product => product.price + product.price * 10/10 )

const increaseProductPrice = (products)=> products.map(product => product.price + product.price * 10/100);

console.log(increaseProductPrice(products));