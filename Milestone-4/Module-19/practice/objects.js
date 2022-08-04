//** */ Objects


const myComputer = {

    brandName: 'Apple',
    processor: 'M1',
    price: "1499$",
    years : {
        startFrom: 2001,
        revolutionYear: 2019,
    }
}

// console.log(myComputer.price);

// Object.freeze(myComputer);


myComputer.price = 20000;

// console.log(myComputer);
 

const {years:{revolutionYear}} = myComputer;

console.log(revolutionYear);
// ** Different access things

console.log((myComputer['years'])["revolutionYear"]);

