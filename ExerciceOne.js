'use strict';

function randomHex( hex, name ){
  var len = hex.length;
  var hexCode = '';

  for( var i = 0; i < 6; i++){
    hexCode += hex.charAt(Math.floor(Math.random() * len));
  }

  console.log(name + ' = #' + hexCode);
  return '#' + hexCode;
}


function dec2Hex(decimal) {
    var hexChars = '0123456789ABCDEF';
    var a = decimal % 16;
    var b = ( decimal - a ) / 16;
    var hex = hexChars.charAt(b) + hexChars.charAt(a);
    return hex;
}


function encode(input) {
    var hexOutput = '';
    for (var i=0; i < input.length; i++) {
      hexOutput += dec2Hex(input.charCodeAt(i));
    }
    randomHex( hexOutput, input );
    return hexOutput;
}


/* Testing */

var eg = randomHex('4b2311111111');
var results = { total: 0, bad: 0 };

function isValidHexColor( color ){
  var pattern = new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);
  return pattern.test(color);
}

function test(then, expected, result) {
  results.total++;

  if (then !== expected) {
    results.bad++;
    console.log('Expected ' + expected + ', but was ' + result);
  }
}


test(typeof encode('cadena'), 'string', 'I expect to find an encode function');
test(typeof dec2Hex(122), 'string', 'No function');
test(typeof randomHex('4b23'), 'string', 'No function');
test(dec2Hex(122), '7A', 'Its wrong');
test(eg.length, 7, 'Its wrong');
test(isValidHexColor(eg), true, 'Its wrong');
console.log('Of ' + results.total + ' tests, ' + results.bad + ' failed, ' + (results.total - results.bad) + ' passed.');
