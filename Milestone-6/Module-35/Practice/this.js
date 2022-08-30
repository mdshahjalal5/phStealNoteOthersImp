// ** this 

// console.log(this) // return window object

// ** this in method

const employee = {
    firstName : 'jhon',
    lastName : 'Doe',
    salary : 7000,
    email: function(){
        console.log(this)
        return `${this.firstName}${this.lastName}@company.com`;
    },
   
    email2: ()=>{
        console.log(this)
        return `${this.firstName}${this.lastName}@company.com`;
    }, // return window object when its inside another object
    expense: function(rent,food){
        const totalExpense = this.salary - rent - food;
        // this.salary = totalExpense
        return `total saving is ${totalExpense} and ${this.salary}`;
    }
};

const developer = {
    firstName : 'Kamrul',
    lastName: 'Hasan',
    salary: 90000
};

employee.email();
employee.email2();
