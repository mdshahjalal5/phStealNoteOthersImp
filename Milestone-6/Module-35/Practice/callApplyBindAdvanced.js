const employee = {
    firstName : 'jhon',
    lastName : 'Doe',
    salary : 7000,
    email: function(){
        return `${this.firstName}${this.lastName}@company.com`;
    },
    email2: ()=>{
        console.log(this)
        // return `${this.firstName}${this.lastName}@company.com`;
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

const devEmail2 = employee.email2.call(developer);

console.log(devEmail2)

