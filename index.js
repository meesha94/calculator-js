//declare global variables 

const numberButtons = document.querySelectorAll(".number")
const operationButtons = document.querySelectorAll(".operation")
const equalsButton = document.querySelector(".equals")
const clearButton = document.querySelector(".clear")
const operators = ("+", "-", "*", "/")

let answer = "";
let input = "";

//iterate through number buttons and return the specific numnber

for (let index=0; index<numberButtons.length; index++) {
    numberButtons[index].addEventListener("click",  () => {
        input += numberButtons[index].innerText;
        document.querySelector(".input").value = input;
    });
};


// iterare through operation keys, turn them into numbers from strings and what sum to do with each operation
for (let index = 0; index<operationButtons.length; index++) {
    operationButtons[index].addEventListener("click", () => {
        if(input.includes("+")){
            const mathsArray = input.split("+");
            const equation = (previousValue, currentValue) =>
            parseFloat(previousValue) + parseFloat(currentValue);
            input = mathsArray.reduce (equation);
            input += operationButtons[index].innerText
        } else if (input.includes("-")){
            const mathsArray = input.split("-");
            const equation = (previousValue, currentValue) => 
            parseFloat(previousValue) - parseFloat(currentValue);
            input = mathsArray.reduce (equation);
            input += operationButtons[index].innerText
        } else if (input.includes("*")){
            const mathsArray = input.split("*");
            const equation = (previousValue, currentValue) =>
            parseFloat(previousValue) * parseFloat(currentValue);
            input = mathsArray.reduce (equation);
            input += operationButtons[index].innerText
        } else if (input.includes("/")){
            const mathsArray = input.split("/");
            const equation = (previousValue, currentValue) =>
            parseFloat(previousValue) / parseFloat(currentValue);
            input = mathsArray.reduce (equation);
            input += operationButtons[index].innerText
        } else {
        input += operationButtons[index].innerText;
        document.querySelector(".input").value = input;
        }
    })

    





}
