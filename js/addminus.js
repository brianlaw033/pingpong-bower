function Addminus(skinName) {
  this.skin = skinName;
}
Addminus.prototype.addMinus = function(num1,mathSign,num2) {
  var output = [];
  var num1 = parseInt(num1);
  var num2 = parseInt(num2);
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
