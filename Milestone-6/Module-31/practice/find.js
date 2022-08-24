// ** filter and find both sorto puron korle array er element ta k return kore but filter newArray of elements return kore but find only first j element ta sorto puron kore oita return korbe

const friends = ['Tom Hanks','Tom Holands','Tom brady','Tom Solaiman','Guru','babul','Abul'];
const products = [
    {id:1,name:'Laptop',price:34000},
    {id:2,name:'Mobile',price:40000},
    {id:1,name:'Cycle',price:30000},
    {id:1,name:'Tablet',price:69000},
]

// ** find the first product which price is more than 45k

const firstProductPriceMoreThanFortyFiveK = (products)=> products.find(product => product.price > 45000);

console.log(firstProductPriceMoreThanFortyFiveK(products));

// ** Find tom holands

const tomHolands = (friends) => friends.find(friend => friend.toLowerCase() === 'tom holands');

console.log(tomHolands(friends))