'use strict';

function numberToWords ( number ) {
  var units = ['', ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine', ' ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen'];
  var tens = ['', '', ' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety'];
  var hundred = ' hundred';
  var thousand = ' thousand';
  var million = ' million';
  var billon = ' billon';
  var unitMillion = '';
  var unitBillion = '';
  var output = '';
  var msj = '';

  if (typeof number!== 'number') {
    msj = { name: 'TypeError', message: 'Please, type in a number' };

    return msj.message;
  }

  var numString = number.toString();

  if (numString.length > 12) {
    msj = { name: 'TypeError', message: 'Warning, the number is longest' };

    return msj.message;
  }

  // Zero case
  if (number=== 0) {
    return 'zero';
  }

  //the case of 10, 11, 12 ,13, .... 19
  if ( number < 20) {
    output = units[number];

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

    output = units[parseInt(numString.charAt(1))] ?  units[parseInt(numString.charAt(1))] + hundred : '';
    output += tens[parseInt(numString.charAt(2))];
    output += units[parseInt(numString.charAt(3))] ? units[parseInt(numString.charAt(3))] + thousand : '';
    output += units[parseInt(numString.charAt(4))] ? units[parseInt(numString.charAt(4))] + hundred : '';
    output += tens[parseInt(numString.charAt(5))];
    output += units[parseInt(numString.charAt(6))];

    return unitMillion + output;
  }

  //10000000 and more
  if (numString.length === 8) {
    unitMillion = tens[parseInt(numString.charAt(0))];
    unitMillion += units[parseInt(numString.charAt(1))] + million;

    output = units[parseInt(numString.charAt(2))] ? units[parseInt(numString.charAt(2))] + hundred : '';
    output += tens[parseInt(numString.charAt(3))];
    output += units[parseInt(numString.charAt(4))] ? units[parseInt(numString.charAt(4))] + thousand : '';
    output += units[parseInt(numString.charAt(5))] ? units[parseInt(numString.charAt(5))] + hundred : '';
    output += tens[parseInt(numString.charAt(6))];
    output += units[parseInt(numString.charAt(7))];

    return unitMillion + output;
  }

  //100000000 and more
  if (numString.length === 9) {
    unitMillion = units[parseInt(numString.charAt(0))] + hundred;
    unitMillion += tens[parseInt(numString.charAt(1))];
    unitMillion += units[parseInt(numString.charAt(2))] + million;

    output = units[parseInt(numString.charAt(3))] ? units[parseInt(numString.charAt(3))] + hundred : '';
    output += tens[parseInt(numString.charAt(4))];
    output += units[parseInt(numString.charAt(5))] ? units[parseInt(numString.charAt(5))] +  thousand : '';
    output += units[parseInt(numString.charAt(6))] ? units[parseInt(numString.charAt(6))] + hundred : '';
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

    output = units[parseInt(numString.charAt(4))] ? units[parseInt(numString.charAt(4))] + hundred : '';
    output += tens[parseInt(numString.charAt(5))];
    output += units[parseInt(numString.charAt(6))] ? units[parseInt(numString.charAt(6))] + thousand : '';
    output += units[parseInt(numString.charAt(7))] ? units[parseInt(numString.charAt(7))] + hundred : '';
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

    output = units[parseInt(numString.charAt(5))] ? units[parseInt(numString.charAt(5))] + hundred : '';
    output += tens[parseInt(numString.charAt(6))];
    output += units[parseInt(numString.charAt(7))] ? units[parseInt(numString.charAt(7))] + thousand : '';
    output += units[parseInt(numString.charAt(8))] ? units[parseInt(numString.charAt(8))] + hundred : '';
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

    output = units[parseInt(numString.charAt(6))] ? units[parseInt(numString.charAt(6))] + hundred : '';
    output += tens[parseInt(numString.charAt(7))];
    output += units[parseInt(numString.charAt(8))] ? units[parseInt(numString.charAt(8))] + thousand : '';
    output += units[parseInt(numString.charAt(9))] ? units[parseInt(numString.charAt(9))] + hundred : '';
    output += tens[parseInt(numString.charAt(10))];
    output += units[parseInt(numString.charAt(11))];

    return unitBillion + unitMillion + output;
  }

  output += tens[parseInt(numString.charAt(0))];
  output += units[parseInt(numString.charAt(1))];

  return output;
}

numberToWords(2234567);

console.assert(typeof numberToWords(200) === 'string', '1');
console.assert(numberToWords(200) === ' two hundred', '2');
console.assert(numberToWords(20000000000000) === 'Warning, the number is longest', '3');
console.assert(numberToWords(true) === 'Please, type in a number', '4');
console.assert(numberToWords(false) === 'Please, type in a number', '5');
console.assert(numberToWords(undefined) === 'Please, type in a number', '6');
console.assert(numberToWords(null) === 'Please, type in a number', '7');
