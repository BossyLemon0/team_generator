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


function ManagerQ(){
const questions = [

    {
        type:'input',
        name:'usage',
        message:'Provide examples and instructions for usage. Include screenshots if needed.',
        default:'Figure it out yourself'
    },

    {
        type:'input',
        name:'username',
        message:'please enter your github username',
        default:''
    },
    {
        type:'input',
        name:'email',
        message:'please enter your email adress',
        default:''
    },
    {
        type:'list',
        name:'employee',
        choices: ['engineer','intern','Exit'],
    }
];
inquirer.prompt(questions)
.then((answers)=>{ 
    console.log(answers);
    if (answers.employee === "engineer"){
        EngineerQ();
    }
    if (answers.employee === "intern" ){
        InternQ();
    }
    else{
        return "log the info you found"
    }
});
}

function EngineerQ(){
const newQ = [

    {
        type:'input',
        name:'usage',
        message:'Provide examples and instructions for usage. Include screenshots if needed.',
        default:'Figure it out yourself'
    },

    {
        type:'input',
        name:'username',
        message:'please enter your github username',
        default:''
    },
    {
        type:'input',
        name:'email',
        message:'please enter your email adress',
        default:''
    },
    {
        type:'list',
        name:'employee',
        choices: ['engineer','intern','Exit'],
    }
];
inquirer.prompt(newQ)
.then((answers)=>{ 
 console.log(answers);
 if (answers.employee === "engineer"){
    EngineerQ();
}
if (answers.employee === "intern" ){
    InternQ();
}
else{
    return "log you found"
}
})
}

function InternQ(){
    const questions = [
    
        {
            type:'input',
            name:'usage',
            message:'Provide examples and instructions for usage. Include screenshots if needed.',
            default:'Figure it out yourself'
        },
    
        {
            type:'input',
            name:'username',
            message:'please enter your github username',
            default:''
        },
        {
            type:'input',
            name:'email',
            message:'please enter your email adress',
            default:''
        },
        {
            type:'list',
            name:'employee',
            choices: ['engineer','intern','Exit'],
        }
    ];
    inquirer.prompt(questions)
    .then((answers)=>{ 
        console.log(answers);
        if (answers.employee === "engineer"){
            EngineerQ();
        }
        if (answers.employee === "intern" ){
            InternQ();
        }
        else{
            return "log you found"
        }
    });
    }
    
ManagerQ();