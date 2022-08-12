// ** ৩. এমন একটা ফ্যাংশনা লিখো যেটাকে তুমি ঘন্টাকে ইনপুট প্যারামিটার হিসেবে দিবে। আর সে সেই ঘন্টাকে মিনিটে কনভার্ট করে মিনিট রিটার্ন করবে। 


const hoursToMinutes = (hours)=> typeof hours === "number" && (hours * 60) || `Invalid Input: Please enter a number`;

console.log(hoursToMinutes(24));