'use strict';

function triConvert(num){
  var units = new Array('', ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine', ' ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen');
  var tens = new Array('', '', ' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety');
  var hundred = ' hundred';
  var thousand = ' thousand';
  var million = ' million';
  var billon = ' billon';
  var unitMillion = '';
  var unitBillion = '';
  var output = '';
  var msj = '';
  var numString = num.toString();

  if (typeof num !== 'number') {
    msj = { name: 'TypeError', message: 'Please, type in a number' };
    
    return msj.message;
  }

  if (numString.length > 12) {
    msj = { name: 'TypeError', message: 'Warning, the number is the longest' };

    return msj.message;
  }

  // Zero case
  if (num === 0) {
    return 'zero';
  }

  //the case of 10, 11, 12 ,13, .... 19
  if (num < 20) {
    output = units[num];

    return output;
  }

  //100 and more
  if (numString.length === 3) {
    output = units[parseInt(numString.charAt(0))] + hundred;
    output += tens[parseInt(numString.charAt(1))];
    output += units[parseInt(numString.charAt(2))];

    return output;
  }

  //1000 and more
  if (numString.length === 4) {
    output = units[parseInt(numString.charAt(0))] + thousand;
    output += units[parseInt(numString.charAt(1))] + hundred;
    output += tens[parseInt(numString.charAt(2))];
    output += units[parseInt(numString.charAt(3))];

    return output;
  }

  //10000 and more
  if (numString.length === 5) {
    output = tens[parseInt(numString.charAt(0))];
    output += units[parseInt(numString.charAt(1))] + thousand;
    output += units[parseInt(numString.charAt(2))] + hundred;
    output += tens[parseInt(numString.charAt(3))];
    output += units[parseInt(numString.charAt(4))];

    return output;
  }

  //100000 and more
  if (numString.length === 6) {
    output = units[parseInt(numString.charAt(0))] + hundred;
    output += tens[parseInt(numString.charAt(1))];
    output += units[parseInt(numString.charAt(2))] + thousand;
    output += units[parseInt(numString.charAt(3))] + hundred;
    output += tens[parseInt(numString.charAt(4))];
    output += units[parseInt(numString.charAt(5))];

    return output;
  }

  //1000000 and more
  if (numString.length === 7) {
    unitMillion = units[parseInt(numString.charAt(0))] + million;

    output = units[parseInt(numString.charAt(1))] + hundred;
    output += tens[parseInt(numString.charAt(2))];
    output += units[parseInt(numString.charAt(3))] + thousand;
    output += units[parseInt(numString.charAt(4))] + hundred;
    output += tens[parseInt(numString.charAt(5))];
    output += units[parseInt(numString.charAt(6))];

    return unitMillion + output;
  }

  //10000000 and more
  if (numString.length === 8) {
    unitMillion = tens[parseInt(numString.charAt(0))];
    unitMillion += units[parseInt(numString.charAt(1))];
    unitMillion += million;

    output = units[parseInt(numString.charAt(2))] + hundred;
    output += tens[parseInt(numString.charAt(3))];
    output += units[parseInt(numString.charAt(4))] + thousand;
    output += units[parseInt(numString.charAt(5))] + hundred;
    output += tens[parseInt(numString.charAt(6))];
    output += units[parseInt(numString.charAt(7))];

    return unitMillion + output;
  }

  //100000000 and more
  if (numString.length === 9) {
    unitMillion = units[parseInt(numString.charAt(0))] + hundred;
    unitMillion += tens[parseInt(numString.charAt(1))];
    unitMillion += units[parseInt(numString.charAt(2))] + million;

    output = units[parseInt(numString.charAt(3))] + hundred;
    output += tens[parseInt(numString.charAt(4))];
    output += units[parseInt(numString.charAt(5))] +  thousand;
    output += units[parseInt(numString.charAt(6))] + hundred;
    output += tens[parseInt(numString.charAt(7))];
    output += units[parseInt(numString.charAt(8))];

    return unitMillion + output;
  }

  //1000000000 and more
  if (numString.length === 10) {
    unitBillion = units[parseInt(numString.charAt(0))] + billon;

    unitMillion = units[parseInt(numString.charAt(1))] + hundred;
    unitMillion += tens[parseInt(numString.charAt(2))];
    unitMillion += units[parseInt(numString.charAt(3))] + million;

    output = units[parseInt(numString.charAt(4))] + hundred;
    output += tens[parseInt(numString.charAt(5))];
    output += units[parseInt(numString.charAt(6))] + thousand;
    output += units[parseInt(numString.charAt(7))] + hundred;
    output += tens[parseInt(numString.charAt(8))];
    output += units[parseInt(numString.charAt(9))];

    return unitBillion + unitMillion + output;
  }

  //10000000000 and more
  if (numString.length === 11) {
    unitBillion = tens[parseInt(numString.charAt(0))];
    unitBillion += units[parseInt(numString.charAt(1))] + billon;

    unitMillion = units[parseInt(numString.charAt(2))] + hundred;
    unitMillion += tens[parseInt(numString.charAt(3))];
    unitMillion += units[parseInt(numString.charAt(4))] + million;

    output = units[parseInt(numString.charAt(5))] + hundred;
    output += tens[parseInt(numString.charAt(6))];
    output += units[parseInt(numString.charAt(7))] + thousand;
    output += units[parseInt(numString.charAt(8))] + hundred;
    output += tens[parseInt(numString.charAt(9))];
    output += units[parseInt(numString.charAt(10))];

    return unitBillion + unitMillion + output;
  }

  //100000000000 and more
  if (numString.length === 12) {
    unitBillion = units[parseInt(numString.charAt(0))] + hundred;
    unitBillion += tens[parseInt(numString.charAt(1))];
    unitBillion += units[parseInt(numString.charAt(2))] + billon;

    unitMillion = units[parseInt(numString.charAt(3))] + hundred;
    unitMillion += tens[parseInt(numString.charAt(4))];
    unitMillion += units[parseInt(numString.charAt(5))] + million;

    output = units[parseInt(numString.charAt(6))] + hundred;
    output += tens[parseInt(numString.charAt(7))];
    output += units[parseInt(numString.charAt(8))] + thousand;
    output += units[parseInt(numString.charAt(9))] + hundred;
    output += tens[parseInt(numString.charAt(10))];
    output += units[parseInt(numString.charAt(11))];

    return unitBillion + unitMillion + output;
  }

  output += tens[parseInt(numString.charAt(0))];
  output += units[parseInt(numString.charAt(1))];

  return output;
}

triConvert(8786663847832222222);
