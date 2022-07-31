// You and your friends Tom, Jane, Peter and John got their final exam results. Your total
// score is 85, Tom’s total score is 66, Jane’s total score is 95, Peter’s total score is 56
// and John’s total score is 40. The grading chart is
// 80 or above A grade
// 60 or above B grade
// 50 or above C grade
// 40 or above D grade
// 39 or less => F grade

// Write a program to find your and your friends’ grades using if-else.


let gradeA = 80;
let gradeB = 60;
let gradeC = 50;
let gradeD = 40;
let gradeF = 39

let myScore = 85;
let tomScore = 66;
let janeScore = 95;
let peterScore = 56;
let jhonScore = 40;

// * Individual grades

if (jhonScore>=gradeA){
    console.log(`jhonScore got A`);
} 
else if (jhonScore>=gradeB && jhonScore< gradeA){
    console.log(`jhonScore got B`);
} else if (jhonScore>=gradeC && jhonScore< gradeB){
    console.log(`jhonScore got C`);
} else if (jhonScore>=gradeD && jhonScore< gradeC){
    console.log(`jhonScore got D`);
} else{
    console.log(`jhonScore got F`);
}

if (peterScore>=gradeA){
    console.log(`peterScore got A`);
} 
else if (peterScore>=gradeB && peterScore< gradeA){
    console.log(`peterScore got B`);
} else if (peterScore>=gradeC && peterScore< gradeB){
    console.log(`peterScore got C`);
} else if (peterScore>=gradeD && peterScore< gradeC){
    console.log(`peterScore got D`);
} else{
    console.log(`peterScore got F`);
}

if (tomScore>=gradeA){
    console.log(`I got A`);
} 
else if (tomScore>=gradeB && tomScore< gradeA){
    console.log(`Tom got B`);
} else if (tomScore>=gradeC && tomScore< gradeB){
    console.log(`Tom got C`);
} else if (tomScore>=gradeD && tomScore< gradeC){
    console.log(`Tom got D`);
} else{
    console.log(`Tom got F`);
}

if (myScore>=gradeA){
    console.log(`I got A`);
} 
else if (myScore>=gradeB && myScore< gradeA){
    console.log(`I got B`);
} else if (myScore>=gradeC && myScore< gradeB){
    console.log(`I got C`);
} else if (myScore>=gradeD && myScore< gradeC){
    console.log(`I got D`);
} else{
    console.log(`I got F`);
}

if (janeScore>=gradeA){
    console.log(`Jane got A`);
} 
else if (janeScore>=gradeB && janeScore< gradeA){
    console.log(`Jane got B`);
} else if (janeScore>=gradeC && janeScore< gradeB){
    console.log(`Jane got C`);
} else if (janeScore>=gradeD && janeScore< gradeC){
    console.log(`Jane got D`);
} else{
    console.log(`Jane got F`);
}


// ** Solution I did a lilbit extra
// let gradeA = 80;
// let gradeB = 60;
// let gradeC = 50;
// let gradeD = 40;
// let gradeF = 39

// const grades = [85,66,95,56,40];

// grades.forEach((grade)=> {
//     if (grade >= gradeA) {
//         console.log(`grade got A`)
//     } else if (grade >= gradeB && grade < gradeA) {
//         console.log(`grade got B`);
//     } else if (grade >= gradeC && grade < gradeB){
//         console.log(`grade got C`);
//     } else if (grade >= gradeD && grade < gradeC){
//         console.log(`grade got D`);
//     } else{
//         console.log(`Failed`)
//     }
// } )