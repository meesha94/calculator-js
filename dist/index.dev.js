"use strict";

//declare global variables 
var numberButtons = document.querySelectorAll(".number");
var operationButtons = document.querySelectorAll(".operation");
var equalsButton = document.querySelector(".equals");
var clearButton = document.querySelector(".clear");
var operators = ("+", "-", "*", "/");
var answer = "";
var input = ""; //iterate through number buttons and return the specific numnber

var _loop = function _loop(index) {
  numberButtons[index].addEventListener("click", function () {
    input += numberButtons[index].innerText;
    document.querySelector(".input").value = input;
  });
};

for (var index = 0; index < numberButtons.length; index++) {
  _loop(index);
}

; // iterare through operation keys, turn them into numbers from strings and what sum to do with each operation

var _loop2 = function _loop2(_index) {
  operationButtons[_index].addEventListener("click", function () {
    if (input.includes("+")) {
      var mathsArray = input.split("+");

      var equation = function equation(previousValue, currentValue) {
        return parseFloat(previousValue) + parseFloat(currentValue);
      };

      input = mathsArray.reduce(equation);
      input += operationButtons[_index].innerText;
    } else if (input.includes("-")) {
      var _mathsArray = input.split("-");

      var _equation = function _equation(previousValue, currentValue) {
        return parseFloat(previousValue) - parseFloat(currentValue);
      };

      input = _mathsArray.reduce(_equation);
      input += operationButtons[_index].innerText;
    } else if (input.includes("*")) {
      var _mathsArray2 = input.split("*");

      var _equation2 = function _equation2(previousValue, currentValue) {
        return parseFloat(previousValue) * parseFloat(currentValue);
      };

      input = _mathsArray2.reduce(_equation2);
      input += operationButtons[_index].innerText;
    } else if (input.includes("/")) {
      var _mathsArray3 = input.split("/");

      var _equation3 = function _equation3(previousValue, currentValue) {
        return parseFloat(previousValue) / parseFloat(currentValue);
      };

      input = _mathsArray3.reduce(_equation3);
      input += operationButtons[_index].innerText;
    } else {
      input += operationButtons[_index].innerText;
      document.querySelector(".input").value = input;
    }
  });
};

for (var _index = 0; _index < operationButtons.length; _index++) {
  _loop2(_index);
}