'use strict';

function validateData( number, cvv ){
  if( typeof (number && cvv) === 'number'){
   return validateCardNumber( number );
  }
  return false;
}

function validateCardNumber( number ){
  var numberToString = number.toString();
  var numToSLength = numberToString.length;
  if ( numToSLength === 16 || numToSLength === 14) {
    return validateTypeCard(number) && isValidCard(number);
  }
  return false;
}

function getData(number, expiryDate, expiryYear, cvv){
  if(validateData(number, cvv) && validateDate(expiryDate, expiryYear)){
    console.log('Your credit card is ok');
  }else{
    console.log('Your credit card has been expiried');
  }
}

function validateTypeCard( number ){
  var firstNumber =  number.toString().charAt(0);

  switch (firstNumber) {
    case '3':
      console.log('American Express')
      return true
      break;
    case '4':
      console.log('Visa')
      return true
      break;
    case '5':
      console.log('MasterCard')
      return true
      break;
    case '6':
      console.log('Discover')
      return true
      break;
    default:
      return  false
  }
}

function isValidCard( number ){
  var sum = 0;
  var numToS = number.toString().split('');

  for (var index = 0; index < numToS.length; index += 2 ) {
    var numberX2 = parseInt(numToS[index]) * 2
    numToS[index] = numberX2 > 9 ? numberX2 - 9 : numberX2;
  }

  sum = sumOfVector(numToS)

  if (sum % 10 === 0 && sum <= 150) {
    console.log('The number is valid');
    return true;
  }else{
    console.log('The number is invalid');
    return false;
  }
}

function sumOfVector( vector ){
  var totalSum = 0;
  for (var index = 0; index < vector.length; index++) {
    totalSum += parseInt(vector[index])
  }
  return totalSum;
}

function validateDate( expiryDate, expiryYear ){
  var today = new Date(new Date()).getTime();
  var newDate = new Date(expiryDate+'/1/'+expiryYear);
  var date = new Date( newDate ).getTime();

  if (date > today) {
    console.log('Valid Date');
    return true;
  }else{
    console.log('Invalid Date');
    return false;
  }
}
