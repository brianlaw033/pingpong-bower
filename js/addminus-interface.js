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
