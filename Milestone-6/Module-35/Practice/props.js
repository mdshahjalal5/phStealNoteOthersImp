// ** object Props 

const employee = {
    firstName : 'jhon',
    lastName : 'Doe',
    salary : 7000,
    email: function(){
        return `${this.firstName}${this.lastName}@company.com`;
    },
    expense: function(rent,food){
        const totalExpense = this.salary - rent - food;
        this.salary = totalExpense
        return `${this.email()}s total saving is ${totalExpense} and ${this.salary}`;
    }
};


const saving = employee.expense(3000,400);

console.log(employee)

console.log(saving);

console.log(employee.email())