// ** Objects 

const Nayok = {

    name: 'Sakib',
    id : 121,
    car:{
        brand: 'Tesla',
        year: 2021,
        manufacturer: {
            name: 'Tesla',
            country: 'US',
        }
    },

    act: function(){
        console.log('Sakib act');
    },

    friends: ['Salman','Amir'],


};


const array = [13,14,16,17];

const myArray = {
    "0" : 13,
    "1" : 14,
    "2" : 16,
    "3" : 19,
}

console.log(myArray);


function sum (number1, number2,...rest){


    console.log(number1,number2, arguments[6]);
}

sum(2,3,22,11,3,1,132);