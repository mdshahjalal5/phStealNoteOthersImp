// ** callback function

const greetingHandler = (timeHandler, name)=>{
    return timeHandler(name);
};

const goodMorningHandler = (name)=>{
    return ('Good Morning', name)
}
const goodEveningHandler = (name)=>{
    return ('Good Evening', name)
}
const goodNightHandler = (name)=>{
    return ('Good Night', name)
};


console.log(greetingHandler(goodMorningHandler,'Tom Hanks'))
console.log(greetingHandler(goodEveningHandler,'Tom Cruise'))
console.log(greetingHandler(goodNightHandler,'Tom '))