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
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, then(function(response) {
      console.log("The humidity in " + city + " is " + response.main.humidity + "%");
    });
    console.log("Notice: The GET request has been made.");
  });
});
});
