'use strict';
$('.txt').html(function(i, html) {
  var chars = $.trim(html).split("");

  return '<span>' + chars.join('</span><span>') + '</span>';
});

function validateDate( number, cvv ){
  if( typeof (number && expiryDate && expiryYear && cvv) === 'number'){
   return validateCardNumber( number );
  }
  return false;
}

function validateCardNumber( number ){
  var numberToString = number.toString();
  if (numberToString.length === 16) {
    return validateTypeCard(number) && isValidCard(number);
  }
  return false;
}

function getData(number, expiryDate, expiryYear, cvv){
  // var number = document.getElementById('number').value;
  // var expiryDate = document.getElementById('date').value;
  // var expiryYear = document.getElementById('year').value;
  // var cvv = document.getElementById('cvv').value;

  if(validateDate(number, cvv) && validateDate(expiryDate, expiryYear)){
    console.log('good');
  }else{
    console.log('bad');
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

  return sum % 10 === 0 && sum <= 150
}

function sumOfVector( vector ){
  var totalSum = 0;

  for (var index = 0; index < numToS.length; index++) {
    totalSum += parseInt(numToS[index])
  }

  return totalSum;
}

function validateDate( expiryDate, expiryYear ){
  var today = new Date(new Date()).getTime();
  var date = new Date( new Date(expiryDate+'/1/'+expiryYear)).getTime();

  return date > today ? true : false;
}

function validateCvv( number, cvv ){

}
