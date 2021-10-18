const Employee = require ('./Employee');

class Intern extends Employee{
constructor(name, Id, email, school){
    super(name, Id, email )
    this.role = "Intern";
    this.school = school;
    }
    getSchool(){
        return this.school;
    }
}

module.exports = Intern;