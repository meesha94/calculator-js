//declare global variables 

const numberButtons = document.querySelectorAll(".number")
const operationButtons = document.querySelectorAll(".operation")
const equalsButton = document.querySelector(".equals")
const clearButton = document.querySelector(".clear")

let answer = ""
let input = ""

for (let index=0; index<numberButtons.length; index++) {
    numberButtons[index].addEventListener("click",  () => {
        input += numberButtons[index].innerText;
        document.querySelector(".input").value = input;
    });
};

