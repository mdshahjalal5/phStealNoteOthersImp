// ** shopping koto takar korsi ber korbo

const shoppingCart = [
    { name:'Shoe', price:2000, quantity: 6 },
    { name:'Shirt', price:2200, quantity: 1 },
    { name:'Pant', price:3700, quantity: 3 },
    { name:'Belt', price: 600, quantity: 2 },
    { name:'Sunglass', price:1000, quantity: 5 },
]


const totalShopping = (shoppingCart)=>{

    let totalShopiingAmount = 0;
    for (const shoppingItem of shoppingCart) {
        
        totalShopiingAmount += shoppingItem.price * shoppingItem.quantity;
    }

    return totalShopiingAmount;
}


const total = totalShopping(shoppingCart);

console.log(total);

