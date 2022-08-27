const Persons = [
    { id: 'ID01', name: "abul vai", age: 23 },
    { id: 'ID02', name: "babul vai", age: 43 },
    { id: 'ID03', name: "habul vai", age: 54 },
    { id: 'ID04', name: "jabul vai", age: 29 }
];

// expected output
// {
//     ID01:"abul vai",
//      ID02: 'babul vai',
//      ID03: 'habul vai',
//      ID04: 'jabul vai'
// }



const convertToSingleString = (Persons)=>{
    const expectedObject = {};
    Persons.forEach( person => {
       const {id,name} = person;

    //    console.log(id)
        
       expectedObject[id] = name;
       
    })

    return expectedObject;
};


console.log(convertToSingleString(Persons))