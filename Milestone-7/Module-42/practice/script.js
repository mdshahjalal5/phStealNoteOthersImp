// ** ২. স্প্রেড অপারেটর (...) কিভাবে কাজ করে। বিশেষ করে একটা array কে কপি করে নতুন করে array বানাবে এবং সেখানে একটা উপাদান যোগ করবে। আবার একটা উপাদান কে বাদ দিয়ে বাকি সব উপাদানকে কিভাবে যোগ করবে (filter ইউজ করে)

const numbers = [12,21,32,12,15,33];

const numbersCopy = [...numbers,999];

// console.log(numbersCopy);

// const result = numbersCopy.reduce((previousValue,currentValue) => previousValue + currentValue,0);

// console.log(result)

// ** use filter

const filteredNumbers = numbersCopy.filter(number => number > 20);

const result = filteredNumbers.reduce((previousValue,currentValue) => previousValue + currentValue , 0);

console.log(result)