// ** More map

const friends = ['Tom Hanks','Tom Holands','Tom brady','Tom Solaiman'];

// friendsFirstLetter er kaj holo friends array er prottek element er first letter ta niye ekta new Array create kora

const friendsFirstLetter = (friends)=> friends.map((friend)=> friend[0]);
const friendsLength = (friends)=> friends.map((friend)=> friend.length);

console.log(friendsFirstLetter(friends));
console.log(friendsLength(friends));

// ** Products array 

const products = [
    {id:1,name:'Laptop',price:34000},
    {id:2,name:'Mobile',price:4000},
    {id:1,name:'Cycle',price:3000},
    {id:1,name:'Tablet',price:69000},
]

const names = (products)=> products.map(product=> product.name);
const prices = (products)=> products.map(product=> product.price);


console.log(names(products));
console.log(prices(products));

