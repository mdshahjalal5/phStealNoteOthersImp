// ** ১. leapYear() নামে ফাংশন লিখো এবং নেক্সট ইয়ার অর্থাৎ ২০২৩ কি leap year নাকি সেটা চেক করো। Leap year হলে ফাংশন true রিটার্ন করবে আর leap year না হলে false রিটার্ন করবে।


const leapYear = (year)=> {

    if (year % 4 === 0 && year % 100 !== 0) {
        return `${year} is a leap year`;
    } else if (year % 4 === 0 && year % 100 === 0){
        if (year % 400 === 0) {
            return `${year} is a leap year`;
        } else {
            return `${year} is not a leap year`;
        }
    } else {
        return `${year} is not a leap year`;
    }

}



console.log(leapYear(1700));