const fs = require ('fs');
const page_template = require ('./src/page-template');
const Employee = require ('./lib/Employee');
const Manager = require ('./lib/Manager');
const Engineer = require ('./lib/Engineer');
const Intern = require ('./lib/Intern');
const inquirer = require('inquirer');


console.log(page_template);
console.log(Employee);
console.log(Manager);
console.log(Engineer);
console.log(Intern);

const employee = []


function ManagerQ(){

const questions = [

    {
        type:'input',
        name:'ManagerName',
        message:`What is the team mananger's name?`,
        default:'Baki Hanma'
    },

    {
        type:'input',
        name:'EmployeeId',
        message:'please enter their Employee Id.',
        default:'unknown'
    },
    {
        type:'input',
        name:'ManagerEmail',
        message:'please enter their email adress',
        default:'unknown'
    },
    {
        type:'input',
        name:'OfficeNumber',
        message:'please enter their office number',
        default:'unknown'
    },
    {
        type:'list',
        name:'employee',
        message:`Who's on your team?`,
        choices: ['engineer','intern', 'exit'],
    }
];
inquirer.prompt(questions)
.then((answers)=>{ 
    //method 1
    // const manager = [new Manager(answers.ManagerName, answers.EmployeeId, answers.ManagerEmail, answers.OfficeNumber)]
    // console.log(manager);
    // page_template(manager);
    // console.log(page_template);

    //method 2
       const manager = new Manager(answers.ManagerName, answers.EmployeeId, answers.ManagerEmail, answers.OfficeNumber)
       employee.push(manager);
       console.log(employee);

    if (answers.employee === "engineer"){
        EngineerQ();
    }
    if (answers.employee === "intern" ){
        InternQ();
    }
    if (answers.employee === "exit"){
        linkage();
    }
})
// .then((employee) => {
//   console.log(employee);
// })
}

function EngineerQ(){
const newQ = [

    {
        type:'input',
        name:'EngineerName',
        message:`What is the Engineer's name?`,
        default:'Baki Hanma'
    },

    {
        type:'input',
        name:'EngineerId',
        message:'please enter their Employee Id.',
        default:'unknown'
    },
    {
        type:'input',
        name:'EngineerEmail',
        message:'please enter their email adress',
        default:'unknown'
    },
    {
        type:'input',
        name:'GitHub',
        message:'please enter their Github username',
        default:'unknown'
    },
    {
        type:'list',
        name:'employee',
        message:`Would you like to add another person?`,
        choices: ['engineer','intern','exit'],
    }
];
inquirer.prompt(newQ)
.then((answers)=>{ 
    //method 1
    // const engineer = [new Engineer(answers.EngineerName, answers.EngineerId, answers.EngineerEmail, answers.GitHub)]
    // console.log(engineer);
    // page_template(engineer);
    // console.log(page_template);

    //method 2
    const engineer = new Engineer(answers.EngineerName, answers.EngineerId, answers.EngineerEmail, answers.GitHub);
    employee.push(engineer);
    console.log(employee);

 if (answers.employee === "engineer"){
    EngineerQ();
}
if (answers.employee === "intern" ){
    InternQ();
}
if (answers.employee === "exit"){
    linkage();
}
})
}

function InternQ(){
    const questions = [
    
        {
            type:'input',
            name:'InternName',
            message:`What is the team intern's name?`,
            default:'Baki Hanma'
        },
    
        {
            type:'input',
            name:'InternId',
            message:'please enter their Employee Id.',
            default:'unknown'
        },
        {
            type:'input',
            name:'InternEmail',
            message:'please enter their email adress',
            default:'unknown'
        },
        {
            type:'input',
            name:'School',
            message:'please enter their school name',
            default:'unknown'
        },
        {
            type:'list',
            name:'employee',
            message:`Would you like to add another person?`,
            choices: ['engineer','intern','exit'],
        }
    ];
    inquirer.prompt(questions)
    .then((answers)=>{ 
        //method 1
        // const intern = [new Intern(answers.InternName, answers.InternId, answers.InternEmail, answers.School)]
        // console.log(intern);
        // page_template(intern);
        // console.log(page_template);

        //method 2
            const intern = new Intern(answers.InternName, answers.InternId, answers.InternEmail, answers.School);
            employee.push(intern);
            console.log(employee);


        if (answers.employee === "engineer"){
            EngineerQ();
        }
        if (answers.employee === "intern" ){
            InternQ();
        }
        if (answers.employee === "exit"){
            linkage();
        }
    });
    }

    function linkage(){
        const questions = [
    
            {
                // type:'confirm',
                name:'exit',
                message: 'Press enter to leave'

            }
        ];
        inquirer.prompt(questions)
        .then(()=>{ 
            employee;
            fs.writeFile('./output/index.html', page_template(employee), (err) =>{
                err ? console.log(err) : console.log("Your Html file has been created in the output folder! Hooray!");
                }) ;
        });
    }


    ManagerQ();


// const link = function linkage(PeepObjects){
// page_template(PeepObjects);
// }




/*
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
*/