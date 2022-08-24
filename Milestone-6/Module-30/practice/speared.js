// ** Math.max(expect a number)

const nums = [21,33,45,67,55];

// ** find max value

console.log(Math.max(99,98,999)); // 999

console.log(Math.max(nums)); // NaN as its dosent take parameter as array
console.log(Math.max(...nums)); //67 array er viotor thaka mal k just speared kore bosay dibo


const nums2 = nums;

nums.push(8888);

nums2.push(99999);

// * differrent vabe 2 ta te push klorsi but duita tei 2 ta push er jonno value add hoise bcs they reffere the same refference value

console.log(nums)
console.log(nums2)

// ** so to copy an array or object we use speared operator


const newNums1 = [...nums]; //first we create an empty array then copy
const newNums = [777777,...nums,444444]; //first we create an empty array then copy

console.log(newNums)