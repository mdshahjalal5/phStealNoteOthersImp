// ** 

const bottle = {
    color:'yellow',
    capacity: 1,
    height:12,
    isCleaned: true
};

// ** getting keys

console.log(Object.keys(bottle));
console.log(Object.values(bottle));
console.log(Object.entries(bottle));

// ** Delete a prop

// ** lets say we don't want to make delete happen rather we want to modify the color of the bottle

Object.seal(bottle);

bottle.color = 'Green' // { color: 'Green', capacity: 1, height: 12, isCleaned: true }

delete bottle.color;

// ** amra chai na j is isCleaned delete hok and kono property change hok no modify
Object.freeze(bottle)

bottle.color = 'red' 

delete bottle.isCleaned;


console.log(bottle); //{ capacity: 1, height: 12, isCleaned: true };





