// ** array.filter(()=>{})

const numbers = [32,55,12,32,41,67,82,999,10,19,18,15,21];

// ** write a function that will return the numbers which are greater than 30 from the above array


const numberGreaterThanthirty = (numbers)=> numbers.filter( number => number > 30 ); // filter method sorto je je element puron kortese take ekta array te dhukhai ta final result hisabe return kortese

console.log(numberGreaterThanthirty(numbers));

const numberGreaterThanthirtyMap = (numbers)=> numbers.map( number => number > 30 ); // jokhon ma use kortesi tokhon map sorto puron hole true false passe and take ekta array te moddhe niye ta return kortese

console.log(numberGreaterThanthirtyMap(numbers));

const friends = ['Tom Hanks','Tom Holands','Tom brady','Tom Solaiman','Guru','babul','Abul'];
const products = [
    {id:1,name:'Laptop',price:34000},
    {id:2,name:'Mobile',price:40000},
    {id:1,name:'Cycle',price:30000},
    {id:1,name:'Tablet',price:69000},
]


// ** filter the prododuct which is 35k+ 

const thirthyFiveKPlus = (products)=> products.filter(product => product.price > 35000);

console.log(thirthyFiveKPlus(products));

// ** filter the Toms

const filterToms = (friends)=> friends.filter(friend=> friend.startsWith('Tom'))

console.log(filterToms(friends))

// ** prottek number er sathe 30 plus kore take ekta new array er moddhe niye return korse
const numberGreaterThanthirtyMap2 = (numbers)=> numbers.map( number => number + 30 ); 

console.log(numberGreaterThanthirtyMap2(numbers));

