// ** Shallow copy
const employee = {
    firstName : 'jhon',
    lastName : 'Doe',
    salary : 7000,
    email: function(){
        return `${this.firstName}${this.lastName}@company.com`;
    },
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

const employee2 = {...employee}; //* coppied

employee2 === employee ? console.log(true) : console.log(false)

// ** Deep copy 

const employee3 = JSON.parse(JSON.stringify(employee)); //coppied deep

employee === employee3 ? console.log(true) : console.log(false)