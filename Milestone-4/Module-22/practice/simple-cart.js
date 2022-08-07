// ** shopping koto takar korsi ber korbo

const shoppingCart = [
    { name:'Shoe', price:2000 },
    { name:'Shirt', price:2200 },
    { name:'Pant', price:3700 },
    { name:'Belt', price: 600 },
    { name:'Sunglass', price:1000 }
]


const totalShopping = (shoppingCart)=>{

    let totalShopiingAmount = 0;
    for (const shoppingItem of shoppingCart) {
        
        totalShopiingAmount += shoppingItem.price;
    }

    return totalShopiingAmount;
}


const total = totalShopping(shoppingCart);

console.log(total);

