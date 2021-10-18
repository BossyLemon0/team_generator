class Employee {
    constructor(name,Id,email){

        this.name = name;
        this.id = Id;
        this.email = email;
        this.role = "Employee"
 
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return this.role;
    }
}

const e = new Employee();

console.log(typeof(e));

module.exports = Employee;