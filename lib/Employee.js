class Employee {
    constructor(name,Id,email){
        this.name = name;
        this.id = Id;
        this.email = email;
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
        return "Employee";
    }
}

const e = new Employee();

console.log(typeof(e));

module.exports = Employee;