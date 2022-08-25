//* ১. কখন const আর কখন let দিয়ে ভেরিয়েবল ডিক্লেয়ার করতে হয় সেটা তোমাকে জানতেই হবে। তুমি নিজে নিজে একটা const দিয়ে আরেকটা let দিয়ে ভেরিয়েবল ডিক্লেয়ার করে ফেলো।
// ** ২. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। 

const myName = 'Kamrul';
let salary = 90000;

salary = 120000;

const Person = {
    firstName: 'Jhon',
    lastName:'Doe',
    friendsFullname: function(){
        return `${this.firstName} ${this.lastName}`;
    }
};

console.log(`I am ${myName} and my salary is ${salary}. let me introduce my friend ${Person.friendsFullname()}`);

// ** ৩.১ একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। এবং সেই ফাংশনের কাজ হবে তুমি কোন ইনপুট দিলে সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে। 
console.log('*******************');

const fiveTimes = number => number * 5;

console.log(fiveTimes(5));

// ** ৩.২ তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো 
console.log('*******************');

const finalMultiplication = (number1,number2) => (number1+2) * (number2+2);

console.log(finalMultiplication(5,5));

// ** ৩.৩ এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ট রিটার্ন করবে। 
console.log('*******************');

const threeParametersMultiplication = (number1, number2, number3) => number1 * number2 * number3;

console.log(threeParametersMultiplication(5,5,5));


// ** ৩.৪ এইবার দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো। 

console.log('*******************');


const twoParametersMultiplication = (number1,number2) => {
    const number1PlusTwo = number1 + 2;
    const number2PlusTwo = number2 + 2;

    const result = number1PlusTwo * number2PlusTwo;

    return result;
};

console.log(twoParametersMultiplication(5,5));

// ** ৪. [হোম ওয়ার্ক] একটু গুগলে সার্চ দাও: javascript function declaration vs arrow function তারপর কয়েকটা আর্টিকেল পড়ে বুঝার চেষ্টা করো। 

// ** ৪.৫. জাভাস্ক্রিপ্ট এর var, let, const এর মধ্যে প্রার্থক্য কি? 

// ** ৫. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। 
console.log('*******************');

const fiveTimesArray = numbers => numbers.map(number => number * 5);

console.log(fiveTimesArray([32,34,5,12,2,98]));

// ** ৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো 
console.log('*******************');

const numbers = [11,32,44,53,67,34,98,78,66,55,87];

const filterOdd = numbers => numbers.filter( number => number % 2 !== 0);

console.log(filterOdd(numbers));


// ** ৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। 
console.log('*******************');

const products = [
    {brand: 'Apple', productName: 'iPhone', price: 55000},
    {brand: 'Walton', productName: 'X20 pro', price: 35000},
    {brand: 'Samsung', productName: 'Galaxy S20 Pro', price: 65000},
    {brand: 'Xiomi', productName: '11 pro', price: 45000},
    {brand: 'Apple', productName: 'cleaning cloth', price: 5000},
];

const findProduct = products => products.find(product => product.price === 5000);

console.log(findProduct(products));


// ** ৭.৫ [এক্সট্রা] জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো। 
console.log('*******************');

// ** array.map()---> returns an array after doing some operation . jodi sortomulok operation na hoi
// ** array.filter() ---> returns an array jokhon kono sorto puron kore
// ** array.find() ---> returns something ja sorto puron kore , kono array return korbe na , single value return korbe

// ** ৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। 
console.log('*******************');

const iPhone = {
    brand: 'Apple', 
    productName: 'iPhone', 
    price: 55000,
};


const {price} = iPhone;

console.log(price);

// ** ৯. [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে। 

const [,,three] = numbers;

console.log(three);

// ** ১০. তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে। আর থার্ড প্যারামিটার এর একটা ডিফল্ট ভ্যালু থাকবে। সেটা হবে ৭। 

const threeParametersAdd = (number1,number2,number3=7) => number1 + number2 + number3;

console.log(threeParametersAdd(5,5));

// ** ১১. একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও সে অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট )

console.log('*******************');


const data = {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    person:{
        firstName:'Jhon',
        lastName:'Doe',
        location:{
            house:'Dhaka',
            workplace:'Lalmatia'
        },
        transport:["air",'Water',{
            localtransport: ["rickshow","bus",'Cycle']
        }]
    },
  }

// ** ১২. উপরের অবজেক্ট এ ডট এর আগে যে প্রশ্নবোধক চিহ্ন দিয়ে যে অপশনাল চেইনিং করা যায়। সেটা একটু প্রাকটিস করো। 

// ** data not found message

data.person.location?.house === undefined && console.log(`No data found`) || console.log(data.person.location?.house);

// console.log(data.person.location?.house);




