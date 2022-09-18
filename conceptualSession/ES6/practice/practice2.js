
const Employee = [
    {
        id: 01,
        firstName : 'Jhon',
        lastName : 'Doe',
        age:55
    },
    {   
        id : 02,
        firstName : 'Hasan',
        lastName : 'Kamrul',
        age: 34
    },
    {   
        id : 03,
        firstName : 'Umme',
        lastName : 'Habiba',
        age: 22
    },
    {   
        id:04,
        firstName : 'Saimon',
        lastName : 'Katich',
        age: 15
    }
]
    

// ** {id:"Hasan"};


const convertToSingleobject = (Employee)=>{
    const expectedobject = {};
    Employee.forEach(employ => {
       const {id,firstName} = employ;

       expectedobject[id] = firstName;
    });

    return expectedobject;
};

console.log(convertToSingleobject(Employee))
