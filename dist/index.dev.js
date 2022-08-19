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

var _loop2 = function _loop2(_index) {
  operationButtons[_index].addEventListener("click", function () {
    input += operationButtons[_index].innerText;
    document.querySelector(".input").value = input;
  });
};

for (var _index = 0; _index < operationButtons.length; _index++) {
  _loop2(_index);
}