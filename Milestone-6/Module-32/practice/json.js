// ** 1. JSON.stringfy

// const person = {

//     firstName: 'John',
//     lastName: 'Doe',
//     isDeveloper : true,
//     address:{
//         home: 'Kaliakoir',
//         city:'Dhaka',
//         livesIn:["Dhaka","Gazipur","Khulna"]
//     },

//     travel: ["Kurigram","Rangpur","India"]

// };

// console.log(person);

// // ** convert the above js object into a JSON string

// const convertJsToJSON = (jsObject)=> JSON.stringify(jsObject);

// console.log(convertJsToJSON(person));

// console.log('***************************************************************')

// // ** convert JSON string to JS Object

// const convertToJs = (jsonObj) => JSON.parse(jsonObj);

// console.log(convertToJs(convertJsToJSON(person)));

const stuInfo = JSON.stringify({ name: "James", roll: 3 }); 
console.log(stuInfo.name);