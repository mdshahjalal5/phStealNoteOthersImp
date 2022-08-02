// ** Questions

// 1.জাভাস্ক্রিপ্ট কি জিনিস এইটা কি জানো?

// **  Js is text-based high-level programming language. Which enables interaction , while the HTML and CSS gives a web page structure and style respectively. In short, js gives a web page life or the interaction. Js operates both in the client-side (Browser) and server-side interactivity. for an example-> amazon search box.

// ২. জাভাস্ক্রিপ্ট কিভাবে কাজ করে সেটা কি জানো?
// ** Js is interpreted scripting language. So when a browser finds the js code inside of a html structure it starts to interpreted it and make it machine readable and beased on that adds functionality.

// ৩. ভেরিয়েবল কি জিনিস?
// ** Variable-> is a sort of storage, which stores data of different datatypes. Variable can vary alos can be updated. Due to that or due to change of its state it can give interactivity to a web page.

// ৪. ভেরিয়েবল কিভাবে ডিক্লেয়ার করে 
// ** 5 Things need to declare a variable-> keyword(var,let,const) name(according the naming convention) = value(diff datatypes -> premitive(basic)-1.Number2.String3.Boolean4.Null5.Undefined) + on the other hand -> Non-Premitive (1.function2.Array3.Objects)

// ৫. ভেরিয়েবল এর মান কিভাবে চেইঞ্জ করে বা আপডেট করে। 

// ** if specified var and let var/let fruit -> means variable assigned var/let fruit = 'Mango' -> variable declare or just fruit = 'Mango' , to change it fruit = 'Apple"

// ৬. কি কি ধরণের ভেরিয়েবল হয়। সেগুলা কি কি (হিন্টস: Numeric, String, Boolean)

// ** value(diff datatypes -> premitive(basic)-1.Number2.String3.Boolean4.Null5.Undefined) + on the other hand -> Non-Premitive (1.function2.Array3.Objects)

// ৭. জাভাস্ক্রিপ এ primitive and non primitive data types কি কি ? উদাহরণ হিসেবে বলো। 

// * value(diff datatypes -> premitive(basic)-1.Number2.String3.Boolean4.Null5.Undefined) + on the other hand -> Non-Premitive(not basic refference can change in every render) (1.function2.Array3.Objects)
// ? Primitive data types: The predefined data types provided by JavaScript language are known as primitive data types. Primitive data types are also known as in-built data types.

// ? Non-primitive data types: The data types that are derived from primitive data types of the JavaScript language are known as non-primitive data types. It is also known as derived data types or reference data types.

// ৮. ভেরিয়েবল এর নাম কিভাবে কিভাবে ডিক্লেয়ার করতে হয়। কোন কোন জিনিস নাম এ লেখা যাবে না। অর্থাৎ Variable এর naming convention সম্পর্কে বলো। 

// ? Naming convention -> 1.Don't start with number 2.Don't use string 3. Use camelCase 4.No dashes inside

// ৯. দুইটা ভেরিয়েবল এর মধ্যে =, -, *, /, % কিভাবে করে? 

// let totalPrice = applePrice + orangePrice
// let totalPrice = applePrice - orangePrice
// let totalPrice = applePrice * orangePrice
// let totalPrice = applePrice / orangePrice
// let totalPrice = applePrice % orangePrice //* retunrs vagsesh


// ১০. শর্টহ্যান্ড গুলো জানতে হবে। বিশেষ করে +=, -=, *=, /= জানতে হবে। 

// * price = price + 10;
// ? price += 10
// ? price -= 10
// ? price *= 10
// ? price /= 10

// ১১.. ++ এবং -- এর কাজ কি ? এইটা কি জানো। 

// * price = price + 1;
// ? price++
// * price = price - 1;
//? price--

// ১২ parseInt, parseFloat, toFixed এইগুলা কি করে? 

// ? if variable value let orangePrice = '100' -> specified as string, to convert it to a fullNumber datatypes we use -> parseInt(orangePrice)

// ? if variable value let orangePrice = '100.12' -> specified as string, to convert it to a float datatypes we use -> parseFloat(orangePrice)

// --------------

// ১৩. Array কি জিনিস। এইটা কিভাবে কাজ করে? কিভাবে Array ডিক্লেয়ার করতে হয় 

// ? const array = [storage box, stores diff datatypes in order, where order starts with 0 index]
// ১৪. array এর মধ্যে কয়টা উপাদান (element) আছে সেটা কিভাবে বের করে 
// ? array.length
// ১৫. array এর উপাদান গুলা এর পজিশন ( index) কিভাবে কাজ করে। কত দিয়ে শুরু হয়। এবং মান কিভাবে চেইঞ্জ হয়। 

// ? Starts with 0, er por ++ (ek ek kore barte thake)

// ১৬. কোন একটা উপাদানের index এর মান -১ বলতে কি বুঝায় 

// ? That element place on the position 1 or the second element of that array

// ১৭. কিভাবে index দিয়ে কোন একটা array এর মধ্যে উপাদান এর মান খুঁজে বের করতে পারো 

// ? var mangoPosition = fruits[3]

// ১৮. কিভাবে কোন একটা index পজিশন এ array এর উপাদান এর মান চেইঞ্জ করতে পারবে 

// ? fruits[3] = 'Mango' -> suppose er age ei position a Banana silo ami change kore 'Mango' kore dilam

// ১৯. একটা Array এর মধ্যে কোন একটা উপাদান এর মান তোমাকে দেয়া আছে এখন সেটার index তুমি কিভাবে খুঁজে বের করতে পারো?

//todo fruits.indexOf('Apple');

// ২০. ধরো, কোন একটা ইনডেক্স দিয়ে উপাদান খুঁজতে গেছো। কিন্তু সেটার মান না দিয়ে তোমাকে undefined দেখাচ্ছে। সেটা দেখে তুমি কি বুঝবে? (একটু গুগলে সার্চ দাও। আমরা কোর্স এ এইটা আলোচনা করিনি। তারপরেও চেষ্টা করে দেখো)

// * If the index contains no value but the index specified it returns undefined-> such as var arr = []; for(var i = 1; i < 10; i++){arr.push(i);console.log(ar[i])}


// ২১. কোন একটা Array এর মধ্যে লাস্ট উপাদান হিসেবে কোন উপাদান হিসেবে যোগ করতে চাইলে কিভাৱে যোগ করবে। আবার Array থেকে শেষের উপাদান টা বের করে দিতে চাইলে কিভাবে বের করে দিবে

// ? arr.push('Pineapple');
// ? arr.pop()

// ২২. কোন একটা Array এর মধ্যে প্রথম উপাদান হিসেবে কোন উপাদান হিসেবে যোগ করতে চাইলে কিভাৱে যোগ করবে। আবার Array থেকে প্রথম উপাদান টা বের করে দিতে চাইলে কিভাবে বের করে দিবে
// ? arr.unshift()
// ? arr.shift()

// ২৩. তুলনা কিভাবে করতে হয়। এইগুলার মানে কি: >, <, ==, !=, <=, >=, ===, !==, &&, ।। 
// ? greater than, less than,equals,not eual,greater than or equals, less than or equals, === check the equality with datatype checking,  !== check the not equality with datatype checking, side1 && side2 both side true, side1 || side2 both side or either side true
// ২৪. তোমার কাছে: ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, ৬০ টাকার বেশি হলে gaming ল্যাপটপ কিনবে, ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে , ২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে। না হয় তুমি মোবাইল দিয়ে কাজ চালাবে। 

// ? suppose let myBalance = 100000; if(myBalance > 60000) {gaming laptop} else if (myBalance > 40000 && myBalance < 60000) -> {lenovo yoga} else if (myBalance > 20000 && myBalance < 40000) -> {normal laptop}

// ---------------------

// ২৫. আসকে আমার মন ভালো নেই -- এই কথা ৩৯ বার আউটপুট হিসেবে দেখাও। 

for(let i = 1; i<=39; i++ )-> console.log('আসকে আমার মন ভালো নেই')

// ২৬. while লুপ কিভাবে কাজ করে 

// ? 1. loop variable
// ? while(2.loop condition){3.loop body 4.loop variable change}

// ২৭. for লুপ কিভাবে কাজ করে 

// ? for(1.loop variable(only execute initially; 2.condition 4.loop variable change)->{3.loop body})

// ২৮. while লুপ এর মধ্যে লুপ ভেরিয়েবল চেইঞ্জ না করলে কি সমস্যা হয়। 
// ? Infinity loop executes
// ২৯. একটা কোড লিখে ৫৮ থেকে ৯৮ পর্যন্ত যত সংখ্যা আছে সেগুলাকে দেখাও 
// ? for (let i = 58; i <= 98; i++) {
   
//     console.log(i);
    
// }
// ৩০.একটা কোড লিখে ৪১২ থেকে ৪৫৬ পর্যন্ত যত জোর সংখ্যা আছে সেগুলাকে দেখাও  

for (let i = 412; i <= 456; i+=2) {
   
    console.log(i);
    
}

// ৩১. একটা কোড লিখে ৫৮১ থেকে ৬২৩ পর্যন্ত যত বিজোড় সংখ্যা আছে সেগুলাকে দেখাও 

for (let i = 581; i <= 623; i+=2) {
   
    console.log(i);
    
}

// ৩২.while আর for loop এর মধ্যে পার্থক্য কি 
// ? pattern is different but the working principle same

// ৩৩ তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও। 
const myLearning = ['Variable','Operators','Loop']

for (let i = 0; i < myLearning.length; i++) {
    const element = myLearning[i];

    console.log(element)
    
}

// ৩৪. তুমি এতদিন পর্যন্ত যে যে মডেলের মোবাইল ফোন ইউজ করেছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা while লুপ দিয়ে সেই array এর উপাদান গুলা একটা একটা করে আউটপুট হিসেবে দেখাও 

const myLearning = ['Variable','Operators','Loop']

let index = 0;

while (index < myLearning.length) {

    console.log(myLearning[index]);

    index++;
    
}

// ৩৫. একটা ফর লুপ চালাও। ৩০ থেকে ৮৬ পর্যন্ত। আর এই লুপ ৪৪ এ গেলে ব্রেক করবে। সেই জিনিস কোড করে দেখাও 
for (let i = 30; i <= 86; i++) {
   
    console.log(i);

    if (i===44) {
        break;
    }
    
}

// ৩৬. তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। বাকিদের কে আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা। 

const bookPrices = [300,120,30,440,56,76,89,201];

for (let i = 0; i < bookPrices.length; i++) {
    const bookPrice = bookPrices[i];
    
    if (bookPrice > 200) {
        continue;
    }

    console.log(`Book price: ${bookPrice}`);
}