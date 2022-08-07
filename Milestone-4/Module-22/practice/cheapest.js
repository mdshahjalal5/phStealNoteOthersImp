// ** Find the cheapest phone

const phones = [
    { brand:'Samsung', camera:12, storage: '32gb', price: 36000, color:'silver'},
    { brand:'Walton', camera:10, storage: '32gb', price: 22000, color:'silver'},
    { brand:'iPhone', camera:12, storage: '32gb', price: 82000, color:'silver'},
    { brand:'Xiomi', camera:12, storage: '32gb', price: 44000, color:'silver'},
    { brand:'Oppo', camera:12, storage: '32gb', price: 25000, color:'silver'},
    { brand:'Nokia', camera:12, storage: '32gb', price: 54000, color:'silver'},
];


const cheapestPhone = (phones) => {

    let cheap = phones[0];

    for (const phone of phones) {
        // console.log(phone);

        // console.log(phone["price"]);

        if (cheap.price > phone["price"]) {
            cheap = phone;
        }

        
    }

    return cheap;
}

const cheapestPrice = cheapestPhone(phones);

console.log(cheapestPrice);

