'use strict';

function triConvert(num){
  var units = new Array('', ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine', ' ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen');
  var tens = new Array('', '', ' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety');
  var hundred = ' hundred';
  var thousand = ' thousand';
  var million = ' million';
  var billon = ' billon';

  var output = '';
  var numString = num.toString();

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

    var deca = tens[parseInt(numString.charAt(0))];
    deca += units[parseInt(numString.charAt(1))];
    deca += thousand;

    output += units[parseInt(numString.charAt(2))] + hundred;
    output += tens[parseInt(numString.charAt(3))];
    output += units[parseInt(numString.charAt(4))];
    return deca + output;
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
    var mill = '';
    mill = units[parseInt(numString.charAt(0))] + million;

    output = units[parseInt(numString.charAt(1))] + hundred;
    output += tens[parseInt(numString.charAt(2))];
    output += units[parseInt(numString.charAt(3))] + thousand;

    output += units[parseInt(numString.charAt(4))] + hundred;
    output += tens[parseInt(numString.charAt(5))];
    output += units[parseInt(numString.charAt(6))];
    return mill + output;
  }

  //10000000 and more
  if (numString.length === 8) {
    var mill2 = tens[parseInt(numString.charAt(0))];
    mill2 += units[parseInt(numString.charAt(1))];
    mill2 += million;

    output = units[parseInt(numString.charAt(2))] + hundred;
    output += tens[parseInt(numString.charAt(3))];
    output += units[parseInt(numString.charAt(4))] + thousand;

    output += units[parseInt(numString.charAt(5))] + hundred;
    output += tens[parseInt(numString.charAt(6))];
    output += units[parseInt(numString.charAt(7))];
    return mill2 + output;
  }

  //100000000 and more
  if (numString.length === 9) {
    var mill3 = units[parseInt(numString.charAt(0))] + hundred;
    mill3 += tens[parseInt(numString.charAt(1))];
    mill3 += units[parseInt(numString.charAt(2))];
    mill3 += million;

    output = units[parseInt(numString.charAt(3))] + hundred;
    output += tens[parseInt(numString.charAt(4))];
    output += units[parseInt(numString.charAt(5))] +  thousand;

    output += units[parseInt(numString.charAt(6))] + hundred;
    output += tens[parseInt(numString.charAt(7))];
    output += units[parseInt(numString.charAt(8))];
    return mill3 + output;
  }

  //1000000000 and more
  if (numString.length === 10) {
    var bill = units[parseInt(numString.charAt(0))] + billon;

    var mill4 = units[parseInt(numString.charAt(1))] + hundred;
    mill4 += tens[parseInt(numString.charAt(2))];
    mill4 += units[parseInt(numString.charAt(3))];
    mill4 += million;

    output = units[parseInt(numString.charAt(4))] + hundred;
    output += tens[parseInt(numString.charAt(5))];
    output += units[parseInt(numString.charAt(6))] + thousand;

    output += units[parseInt(numString.charAt(7))] + hundred;
    output += tens[parseInt(numString.charAt(8))];
    output += units[parseInt(numString.charAt(9))];
    return bill + mill4 + output;
  }

  //10000000000 and more
  if (numString.length === 11) {
    var bill1 = tens[parseInt(numString.charAt(0))];
    bill1 += units[parseInt(numString.charAt(1))];
    bill1 += billon;

    var mill5 = units[parseInt(numString.charAt(2))] + hundred;
    mill5 += tens[parseInt(numString.charAt(3))];
    mill5 += units[parseInt(numString.charAt(4))];
    mill5 += million;

    output = units[parseInt(numString.charAt(5))] + hundred;
    output += tens[parseInt(numString.charAt(6))];
    output += units[parseInt(numString.charAt(7))] + thousand;

    output += units[parseInt(numString.charAt(8))] + hundred;
    output += tens[parseInt(numString.charAt(9))];
    output += units[parseInt(numString.charAt(10))];
    return bill1 + mill5 + output;
  }

  //100000000000 and more
  if (numString.length === 12) {
    var bill2 = units[parseInt(numString.charAt(0))] + hundred;
    bill2 += tens[parseInt(numString.charAt(1))];
    bill2 += units[parseInt(numString.charAt(2))];
    bill2 += billon;

    var mill6 = units[parseInt(numString.charAt(3))] + hundred;
    mill6 += tens[parseInt(numString.charAt(4))];
    mill6 += units[parseInt(numString.charAt(5))];
    mill6 += million;

    output = units[parseInt(numString.charAt(6))] + hundred;
    output += tens[parseInt(numString.charAt(7))];
    output += units[parseInt(numString.charAt(8))] + thousand;

    output += units[parseInt(numString.charAt(9))] + hundred;
    output += tens[parseInt(numString.charAt(10))];
    output += units[parseInt(numString.charAt(11))];
    return bill2 + mill6 + output;
  }

  output += tens[parseInt(numString.charAt(0))];
  output += units[parseInt(numString.charAt(1))];

  return output;
}

triConvert(878666384783);
