// ** try catch finally

// * if you use try you must use catch or finally or all 3 together
// ? if try block dont have any error it will not execute the catch block
// ? no matter what the finally block will always execute

try{
    console.log('try block inside');
    console.log(student);
}catch(error){
    console.log(error);
    console.log(error.message);
    console.log('error block outside');
}finally{
    console.log('finally the code is executed')
}