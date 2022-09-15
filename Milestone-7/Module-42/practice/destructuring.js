
const employee = {
    ide: 'VS Code',
    designation: 'developer',
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 67,
        address: 'kumarkhali',
        drink: 'water',
        watch: {
            color: 'black',
            price: 500,
            brand: 'garmin'
        }
    }
}


// ** Amar dorker watch brand + languages er 3 number element

const {specification:{watch:{brand}},languages:[,,javaScript]} = employee;

console.log(brand)
console.log(javaScript)