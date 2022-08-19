"use strict";

//declare global variables 
var numberButtons = document.querySelectorAll(".number");
var operationButtons = document.querySelectorAll(".operation");
var equalsButton = document.querySelector(".equals");
var clearButton = document.querySelector(".clear");
var answer = "";
var input = "";

var _loop = function _loop(index) {
  numberButtons[index].addEventListener("click", function () {
    input += numberButtons[index].innerText;
    document.querySelector(".input").value = input;
  });
};

for (var index = 0; index < numberButtons.length; index++) {
  _loop(index);
}

;