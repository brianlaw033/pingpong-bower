(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Addminus(skinName) {
  this.skin = skinName;
}
Addminus.prototype.addMinus = function(num1,mathSign,num2) {
  var output = [];
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  if (mathSign === '+'){
      output.push(num1+num2);
    } else if (mathSign === '-') {
      output.push(num1-num2);
    } else if (mathSign === '*') {
      output.push(num1*num2);
    } else if (mathSign === '/') {
    output.push(num1/num2);
  } else {
    output.push('nil');
  }
  return output;
};


exports.calculatorModule = Addminus;

},{}],2:[function(require,module,exports){
function Calculator(skinName) {
  this.skin = skinName;
}
Calculator.prototype.pingPong = function(goal) {
  var output = [];
  for (var i = 1; i <= goal; i++) {
    if (i % 15 === 0) {
      output.push("ping-pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else  {
      output.push(i);
    }
  }
  return output;
};
exports.calculatorModule = Calculator;

},{}],3:[function(require,module,exports){
var Addminus = require('./../js/addminus.js').calculatorModule;
$(document).ready(function() {
  $('#calculation').submit(function(event) {
    event.preventDefault();
    var num1 = $('#num1').val();
    var mathSign = $('#mathSign').val();
    var num2 = $('#num2').val();
    var simpleCalculator = new Addminus("hot pink");
    var output = simpleCalculator.addMinus(num1,mathSign,num2);

    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});

var Calculator = require('./../js/pingpong.js').calculatorModule;
$(document).ready(function() {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});

$(document).ready(function(){
  $('#time').text(moment());
});

var apiKey = "138115ffd6b4f37071be20c2d839a5b8";

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
      console.log("The humidity in " + city + " is " + response.main.humidity + "%");
    });
    console.log("Notice: The GET request has been made.");
  });
});

},{"./../js/addminus.js":1,"./../js/pingpong.js":2}]},{},[3]);
