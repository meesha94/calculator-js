//declare global variables 

const numberButtons = document.querySelectorAll(".number")
const operationButtons = document.querySelectorAll(".operation")
const equalsButton = document.querySelector(".equals")
const clearButton = document.querySelector(".clear")


let answer = "";
let input = "";

//iterate through number buttons and return the specific numnber

for (let index = 0; index < numberButtons.length; index++) {
    numberButtons[index].addEventListener("click", () => {
        input += numberButtons[index].innerText;
        document.querySelector(".input-display").value = input;
    });
};


// iterare through operation keys, turn them into numbers from strings and what sum to do with each operation
//split at point where operator is used and then use .reduce method to calclaute the equation
//then use the equals key to give functionalty to operations keys and show user the result
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
            input = mathsArray.reduce(equation);
            input += operationButtons[index].innerText
        } else if (input.includes("/")){
            const mathsArray = input.split("/");
            const equation = (previousValue, currentValue) =>
            parseFloat(previousValue) / parseFloat(currentValue);
            input = mathsArray.reduce (equation);
            input += operationButtons[index].innerText
        } else {
        input += operationButtons[index].innerText;
        document.querySelector(".input-display").value = input;
        }
    })

//when user clicks on equals button and the input includes a certain operator then complete the equation
// gives the answer in a seperate display window and clears the input window
equalsButton.addEventListener("click", () => {
    if (input.includes("+")){
        const mathsArray = input.split("+");
        const equation = (previousValue, currentValue) => 
        parseFloat(previousValue) + parseFloat(currentValue);
        answer = mathsArray.reduce(equation);
        document.querySelector(".answer-display").value = answer;
        input ="";
        document.querySelector(".input-display").value = input;
    } else if (input.includes("-")){
        const mathsArray = input.split("-");
        const equation = (previousValue, currentValue) =>
        parseFloat(previousValue) - parseFloat(currentValue);
        answer = mathsArray.reduce(equation);
        document.querySelector(".answer-display").value = answer;
        input = "";
        document.querySelector(".input-display").value = input;
    } else if (input.includes("*")){
        const mathsArray = input.split("*");
        const equation = (previousValue, currentValue) => 
            parseFloat(previousValue) * parseFloat(currentValue);
        answer = mathsArray.reduce(equation);
        document.querySelector(".answer-display").value = answer;
        input ="";
        document.querySelector(".input-display").value = input;
        console.log(input)
        console.log(answer)
    } else if (input.includes("/")) {
        const mathsArray = input.split("/");
        const equation = (previousValue, currentValue) =>
        parseFloat(previousValue) / parseFloat(currentValue);
        answer = mathsArray.reduce(equation);
        document.querySelector(".answer-display").value = answer;
        input = "";
        document.querySelector(".input-display").value = input;
    } else {
        answer = input;
        input = "";
    }
});
};


//clear both displays when AC button is pressed

const clearDisplay = () => {
    //input.value = "";
    //answer.value = "";
    document.querySelector(".answer-display").value = "";
    document.querySelector(".input-display").value = "";
  };
  
  clearButton.addEventListener("click", clearDisplay);

