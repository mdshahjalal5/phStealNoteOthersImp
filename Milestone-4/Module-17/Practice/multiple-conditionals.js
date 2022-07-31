
var isGraduated = true;
var salary = 40000;
var cars = 1;

if (isGraduated && salary >= 50000 && cars >= 1) {
    console.log('Biye Possible');

} else{
    console.log('Biye possible na')
}

if (isGraduated || salary >= 50000 || cars >= 1) {
    console.log('Biye Possible');

} else{
    console.log('Biye possible na')
}
if ((isGraduated && salary >= 50000) || cars >= 1) {
    console.log('Biye Possible');

} else{
    console.log('Biye possible na')
}