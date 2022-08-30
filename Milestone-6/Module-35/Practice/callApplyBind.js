// ** call
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

// ** ekhon ami developer object er email dekhte chay without making an email() method inside the developer object by using the employee object



const devEmail = employee.email.call(developer);
console.log(devEmail)
const devExpense2 = employee.expense.call(developer,2000,4000);

// ** apply

const devExpense = employee.expense.apply(developer,[2000,5000]);
console.log(devExpense2);


// ** bind

const devExpenseTracker = employee.expense.bind(developer);

console.log(devExpenseTracker(2000,3000));