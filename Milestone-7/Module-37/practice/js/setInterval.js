// ** set Interval

let secondCount = 0;
const mySeconCounterStopWatch = (stopLimit)=>{
    const intervalId = setInterval(()=>{
       console.log(++secondCount);

       secondCount === stopLimit && clearInterval(intervalId);
    },200);

    
};

mySeconCounterStopWatch(20);

const timeOut = ()=>{
    setTimeout(()=>{
        console.log(secondCount++);
    },10000);
    
};

timeOut()

