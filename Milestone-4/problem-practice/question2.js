// ** Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student. Marks : 75.25, 65, 80, 35.45, 99.50 (respectively)

var mathmeticsMark = 75.25;
var biologyMark = 65;
var chemistryMark = 80;
var physicsMark = 35.45;
var banglaMark = 99.50;

var totalSubjects = 5;

var avgMarks = (mathmeticsMark+biologyMark+chemistryMark+physicsMark+banglaMark)/totalSubjects;

avgMarks = parseFloat(avgMarks.toFixed(2));

console.log(avgMarks);