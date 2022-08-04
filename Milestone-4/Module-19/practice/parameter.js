// ** Ei bar boro vai amk singara Ante pathailo


function bringSingara(taka){

    console.log('Dokandar mama singara den');
    console.log('Taka sara siingara nai');

    console.log(`Mama ei nen taka ${taka} boro vai dise, ekhon singara den`)
}


// ** Boro vai taka diye amk singara ante pathailo 

bringSingara(250)

// ** Sum of 2 numbers

const addTwoNumbers = (number1,number2)=> console.log('Number sum: ' , number1+number2);

addTwoNumbers(250,250);

// * 13 er Namota

const Namota = (number1,arr)=> {
    // arr.forEach((ar)=> console.log(ar*number1));

    for (let index = 1; index <= 10; index++) {
        const element =  index*number1;

        console.log(element);
    }
};

Namota(13,[1,2,3,4,5,6,7,8,9,10])