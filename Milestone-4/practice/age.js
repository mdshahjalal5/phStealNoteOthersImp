// ** ২. তোমার বয়স কি odd নাকি even সংখ্যা সেটা চেক কর একটা ফাংশন দিয়ে। সেই ফাংশনকে কোন সংখ্যা প্যারামিটার হিসেবে দিলে, সেই সংখ্যা Even হলে ফাংশন true রিটার্ন করবে আর Odd হলে false রিটার্ন করবে।


const ageOddEven = (age)=> age === 0 ? `Age inputed as 0 which is not valid` : age % 2 === 0 && true;

const result = ageOddEven(28);

console.log(result);


console.log()