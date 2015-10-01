'use strict';
function printer( messaje ){
  console.log( messaje );
}

function isDataNumbers( number, cvv ){
  var isNumbers = typeof number === 'number' &&  typeof cvv === 'number';

  return isNumbers ? isDataLength16o14( number ) : false;
}

function isDataLength16o14( number ){
  var numToSLength = number.toString().length;

  if ( numToSLength === 16 || numToSLength === 14) {
    return validateTypeCard(number) && isValidCardNumber(number);
  }else{
    return false;
  }
}

function validateTypeCard( number ){
  var firstNumber =  number.toString().charAt(0);

  switch (firstNumber) {
    case '3':
      printer('American Express')
      return true
      break;
    case '4':
      printer('Visa')
      return true
      break;
    case '5':
      printer('MasterCard')
      return true
      break;
    case '6':
      printer('Discover')
      return true
      break;
    default:
      return  false
  }
}

function isValidCardNumber( number ){
  var isItOk;
  var sum = 0;
  var numToS = number.toString().split('');
  var valid = 'The number is valid (~￣▽￣)~';
  var invalid = 'The number is not invalid ╭( ◕﹏◕ )╮';

  for (var index = 0; index < numToS.length; index += 2 ) {
    var numberX2 = parseInt(numToS[index]) * 2
    numToS[index] = numberX2 > 9 ? numberX2 - 9 : numberX2;
  }

  sum = sumOfElementVector(numToS)
  isItOk = sum % 10 === 0 && sum <= 150;

  isItOk ? printer( valid ) : printer( invalid );

  return isItOk ? true : false;
}

function sumOfElementVector( vector ){
  var totalSum = 0;

  for (var index = 0; index < vector.length; index++) {
    totalSum += parseInt(vector[index])
  }

  return totalSum;
}


function validateDate( expiryDate, expiryYear ){
  var today = +new Date();
  var date  = +new Date(expiryDate+'/1/'+expiryYear);
  var diff  = date > today;
  var valid = 'Date is apparently valid ( ◠‿◠)';
  var expiried = 'Your credit card has been expiried (✖╭╮✖)';

  diff ? printer( valid ) : printer( expiried );
  return diff ? true : false;
}

// Main function *************************************
function isValidCreditCard( ){
  var number = parseInt(document.getElementById('number').value);
  var expiryDate = parseInt(document.getElementById('month').value);
  var expiryYear = parseInt(document.getElementById('year').value);
  var cvv = parseInt(document.getElementById('cvv').value);

  if(isDataNumbers(number, cvv) && validateDate(expiryDate, expiryYear)){
    printer('Pass. OK <(◕ ◡ ◕<)');
  }else{
    printer('It doesnt work (┛◉Д◉)┛彡┻━┻ ');
  }
}
