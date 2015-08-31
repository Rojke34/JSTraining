'use strict';

/* Get a word and then change all vowels to a special chart */
var transmutation = function( string ){
  const VOWELS = 'aeiouAEIOU';
  const specialChart = '@';
  var wordTransmuted = '';

  if ( typeof string !== 'string' ) {
    var msj = { name: 'TypeError', message: 'Please, type in a word' };
    return msj;
  }

  var splitString = string.split('');

  for( var i = 0; i < splitString.length; i++ ){
    var character = splitString[i];
    var isVowel = VOWELS.indexOf(character) !== -1;
    wordTransmuted += isVowel ? specialChart : character;
  }

  return wordTransmuted;
};

console.assert(typeof transmutation('kevin') === 'string' );
console.assert(transmutation('kevin') === 'k@v@n');
console.assert(transmutation(false).message === 'Please, type in a word');
console.assert(transmutation(true).message === 'Please, type in a word');
console.assert(transmutation(null).message === 'Please, type in a word');
console.assert(transmutation(undefined).message === 'Please, type in a word');
console.assert(transmutation(123).message === 'Please, type in a word');
console.assert(transmutation().message === 'Please, type in a word');
console.assert(typeof transmutation() === 'object');
