'use strict';
function printer( messaje ){
  console.log( messaje );
}

function isDataNumbers( number, cvv ){
  var isNumbers = typeof number === 'number' &&  typeof cvv === 'number';

  if (isNumbers) {
    return isDataLength16o14( number )
  }else{
    return false;
  }
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

  for (var index = 0; index < numToS.length; index += 2 ) {
    var numberX2 = parseInt(numToS[index]) * 2
    numToS[index] = numberX2 > 9 ? numberX2 - 9 : numberX2;
  }

  sum = sumOfElementVector(numToS)
  isItOk = sum % 10 === 0 && sum <= 150;

  isItOk ? printer('The number is valid') : printer('The number is not invalid');
  
  return isItOk ? true : false;
}

function sumOfElementVector( vector ){
  var totalSum = 0;

  for (var index = 0; index < vector.length; index++) {
    totalSum += parseInt(vector[index])
  }

  return totalSum;
}

// Main function *************************************
function isValidCreditCard(number, expiryDate, expiryYear, cvv){
  if(isDataNumbers(number, cvv) && validateDate(expiryDate, expiryYear)){
    printer('Your credit card is ok');
  }else{
    printer('Your credit card has been expiried');
  }
}
