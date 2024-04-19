#!/usr/bin/env  node
//shabang
import inquirer from "inquirer";
const answers = await inquirer.prompt([
{
    type:"number",
    name:"numberone",
    message:"kindly enter your first no:"
},
{
    type:"number",
    name:"numbertwo",
    message:"kindly enter your second no:"
},
{
    type:"list",
    name:"operator",
    choices:["Addition","Subtraction","Multipilcation","Division"],
    message:"select one of the operator to perfrom operation"
},
]);
if(answers.operator === "Addition" ){
console.log(answers.numberone + answers.numbertwo);
}else if(answers.operator === "Subtraction" ){
    console.log(answers.numberone - answers.numbertwo);
    }else if(answers.operator === "Multipilcation" ){
        console.log(answers.numberone * answers.numbertwo);
        }else if(answers.operator === "Division" ){
            console.log(answers.numberone / answers.numbertwo);
            }else{ 
                console.log("please select vaild operator");
                
            }