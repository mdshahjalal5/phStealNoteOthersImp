// ** Write a function of Students of Pro hero -> make every students assignment avg and make the all students avarage as well 
// ** (I did it as a advance Project)

const eachStudentAvarage = (assignments) => {
   
    const assignmentTotal = assignments.reduce((accumulator,currentValue)=> accumulator + currentValue,0);

    assignmentAvarage = assignmentTotal/assignments.length;

    return assignmentAvarage;
}


const student1 = [60,60,60];
const student2 = [45,55,20];
const student3 = [60,45,60];
const student4 = [55,60,45];
const student5 = [45,60,60];
const student6 = [55,60,45];
const student7 = [55,12,45];

const finalAvarageStudent1 = eachStudentAvarage(student1);
const finalAvarageStudent2 = eachStudentAvarage(student2);
const finalAvarageStudent3 = eachStudentAvarage(student3);
const finalAvarageStudent4 = eachStudentAvarage(student4);
const finalAvarageStudent5 = eachStudentAvarage(student5);
const finalAvarageStudent6 = eachStudentAvarage(student6);
const finalAvarageStudent7 = eachStudentAvarage(student7);

console.log('Student1:',finalAvarageStudent1);
console.log('Student2:',finalAvarageStudent2);
console.log('Student3:',finalAvarageStudent3);
console.log('Student4:',finalAvarageStudent4);
console.log('Student5:',finalAvarageStudent5);
console.log('Student6:',finalAvarageStudent6);
console.log('Student6:',finalAvarageStudent7);

const avarageMarksTotal = (finalAvarageStudent1+finalAvarageStudent2+finalAvarageStudent3+finalAvarageStudent4+finalAvarageStudent5+finalAvarageStudent6+finalAvarageStudent7)/7;

console.log(`All students Avarage: ${avarageMarksTotal}`);


