// ** Object looping

const bottle = {
    color:'yellow',
    capacity: 1,
    height:12,
    isCleaned: true
};

// ! System number One
const keys = Object.keys(bottle);

// keys.forEach(key => console.log(key,bottle[key]));

//? System number 2 (We'll use this)

for (const key in bottle) {
    // console.log(key,bottle[key])
}

// ** System number 3 Advanced

for (const [key,value] of Object.entries(bottle)) {
    console.log(key,value);
}