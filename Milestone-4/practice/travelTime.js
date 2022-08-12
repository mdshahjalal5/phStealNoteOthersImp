// ** ৪. মনে করো তোমার ৪ ঘণ্টা লাগবে ঢাকাই পোঁছতে। তুমি এখন এ ভ্যালু ৪ কে একটা ফাংশনে পাঠাবা এবং সে ফাংশন ভেলু ৪ কে second এ convert করে তোমাকে রিটার্ন করবে।

const travelTime = (time)=> {
    if (typeof time === 'number' && time > 0) {
        return time * 60;
    } else{
        return `Please Input a valid time in Number format`
    }
}



console.log(travelTime(2));

// console.log(typeof 0);