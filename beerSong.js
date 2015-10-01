angular.module('beerSong', [])
  .controller('BeerSongController', function($scope) {

    var beerSong = this;
    $scope.numberOfTimes = '';
    beerSong.stanzas = [];

    beerSong.playSong = function( number ){
      beerSong.stanzas = [];

      if (typeof number === 'number') {

        $( "body" ).addClass( "test" );
        var initial = number;
        var aux = number;
        var final   = 0;

        while (initial != final) {
          if (initial == 1){
            beerSong.stanzas.push({text: "🎵 "+initial + " bottle of beer on the wall, " + initial + " bottle of beer.  Take it down and pass it around, no more bottles of beer on the wall.🎵🎵 "});
          } else {
            beerSong.stanzas.push({text: "🎵 "+initial + " bottles of beer on the wall, " + initial + " bottles of beer. Take one down and pass it around, " + (initial-1) + " bottles of beer on the wall.🎵🎵 "});
          }
          initial--;
        }

        beerSong.stanzas.push({text: "🎵 No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, " + aux + " bottles of beer on the wall.🎵 "});

      }else{
        beerSong.stanzas.push({text: "Please, you need to type in a number"});
      }

    };


    beerSong.getRandomColor = function() {
      var letters = '0123456789ABCDEF'.split('');
      var color = '#';
      for (var i = 0; i < 6; i++ ) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      document.getElementById('id1').style.color = color;
    };





  });
