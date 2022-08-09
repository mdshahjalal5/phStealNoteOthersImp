// ** practice 

// **7. Write a while loop -> odd number from 7-19

let number = 7;

while (number <= 19) {
    
    console.log(number); 
    number += 2;
}

console.log("-------------------------1");

//** */ ৮. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে। 


const numbers = [12,33,25,67,87,98,99,1000,112];

const elementsQuantity = numbers.length;

console.log(elementsQuantity)

numbers[3] = 2000;

console.log(numbers);


console.log("-------------------------2");

//** */ ৯. তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে। সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো। 


const names = ['Fahim','Bappy','Mamun','Zion'];

for (const name of names) {
    console.log(name);
}

console.log("-------------------------3");


//** */ ১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো 

const numbersArray = [112,21,33,200,99,87,76,67,77,85];

for (const number of numbersArray) {
    
    number > 80 && console.log(number);
}

console.log("-------------------------4");

// **১১. তিনটা সংখ্যার গুনফল বের করে ফাইনাল রেজাল্ট আউটপুট হিসেবে রিটার্ন করতে হবে। তুমি কি সেই কোড লিখতে পারবে। যদি পারো তাহলে সেই কোড লিখে ফেলো। 

const threeNumbersMultiplication = (numberOne,numberTwo,numberThree) => numberOne * numberTwo * numberThree;

console.log(threeNumbersMultiplication(12,13,14));

console.log("-------------------------5");


//** */ ১২. একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা। 

const Person = {
    fName : 'John',
    lName : 'Doe',
    age: 20,
    fullName(){
        return `${this.fName} ${this.lName}`;
    },
    email: function(){
        return `${this.fullName()}@gmail,com`;
    }

};


console.log(Person.fullName());
console.log(Person.email());

console.log("-------------------------6");

// ** প্রব্লেম সলভিং চেকলিস্ট/সেলফ এসেসমেন্ট : 

// ** ১. সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়। 

const feetToInch = (feet)=> feet * 12;

console.log(feetToInch(1222));

console.log("-------------------------7");

// ** ২. একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে। 

const centimeterToMeter = (centimeter) => centimeter/100;

console.log(`meter:${centimeterToMeter(100)}`);

console.log("-------------------------8");

// ** ৩. আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে। 

const paperRequirements = (firstBookQuantity, secondBookQuantity,thirdBookQuantity)=> {
    const pagesForFirstBook = 100;
    const pagesForSecondBook = 200;
    const pagesForThirdBook = 300;

    const totalPagesNeededForFirstBook = firstBookQuantity * pagesForFirstBook;
    const totalPagesNeededForSecondBook = secondBookQuantity * pagesForSecondBook;
    const totalPagesNeededForThirdBook = thirdBookQuantity * pagesForThirdBook;

    const totalPagesRequired = totalPagesNeededForFirstBook + totalPagesNeededForSecondBook + totalPagesNeededForThirdBook;

    return totalPagesRequired;
}

console.log(paperRequirements(3,5,2));

console.log("-------------------------9");

// ** ৪. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে। 

const friends = ['Hasan','Ikhtier Uddin Mohammad Bin','Faisal','Karim','Anu'];

const bestFriend = (friends)=> {
    let biggestFriend = friends[0];
    for (const friend of friends) {
        friend.length > biggestFriend.length ? biggestFriend = friend : biggestFriend;
    }

    return biggestFriend;
} 

console.log(bestFriend(friends));

console.log("-------------------------10");


// ** ৫. এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে। 

const nums = [21,66,,76,84,35,75,34,-88,-21,299];


const onlyPositive = function(nums){
    const positiveNumbers = [];

    for (const num of nums) {
        if (num >= 0) {
            positiveNumbers.push(num);
        } else if (num < 0) {
            break;
        }
    }

    return positiveNumbers;
}

console.log(onlyPositive(nums));
console.log("-------------------------11");


// ** ৫. (ট্রিকি) কোন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে। সেই সংখ্যাগুলো থেকে second largest সংখ্যা বের করার একটা প্রোগ্রাম লিখো। দরকার হলে গুগলে সার্চ দাও। তারপর সার্চ রেজাল্ট দেখে বুঝে বুঝে করার চেষ্টা করো। 


const numbersInsideArray = [65,21,33,55,666,782,99,235,500,700,31,22,100,722];

const secondBiggestNumber = (numbersInsideArray)=>{

    // let largest = numbersInsideArray[0];

    // let secondLarge = numbersInsideArray[0];

    // for (const number of numbersInsideArray) {
        
    //     if (number > largest) {
    //         [largest, secondLarge]=[number, largest];
    //     } else if (number < largest && number > secondLarge) {
    //         secondLarge=number;
    //     }
    // }

    // return secondLarge;

    const secondLarge = numbersInsideArray.sort(function(a, b) {
        return b-a;
    });

    return secondLarge[1];

}

console.log(secondBiggestNumber(numbersInsideArray));

console.log("-------------------------12");

// ** ৪. একটা ফাংশন লিখো। যেটা ইনপুট প্যারামিটার হিসেবে একটা আয়তক্ষেত্রের দৈর্ঘ্য আর উচ্চতাকে নিবে। তারপর সেই আয়তক্ষেত্র এর area (আয়তন) কে রেজাল্ট হিসেবে রিটার্ন করবে। 

const area = (l,h)=> l*h;

console.log(area(5,7));
