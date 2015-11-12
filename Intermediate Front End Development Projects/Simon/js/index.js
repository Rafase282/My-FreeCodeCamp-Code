// Set variables
var sequence = [1, 2, 3, 4];
var player = [];
var strict = false;
var count = 0;
var speed = 600;
var audio1 = new Audio(
  'http://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
var audio2 = new Audio(
  'http://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
var audio3 = new Audio(
  'http://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
var audio4 = new Audio(
  'http://s3.amazonaws.com/freecodecamp/simonSound4.mp3');

$('.power-button').on('click', function() {
  $(this).toggleClass('float-left float-right');
  NewRound(sequence, speed);
});

$('.strict-button').on('click', function() {
  $(this).toggleClass('brighten');
});

$('.start-button').on('click', function() {
  $(this).toggleClass('brighten');
});

$('.tiles').on('click', playerMove).on('mousedown', function() {
  var audio = 'audio' + $(this).data('tile');
  beep(audio);
  $(this).toggleClass('brighten');
}).on('mouseup', function() {
  $(this).toggleClass('brighten');
});

function NewRound(sequence, speed) {
  // Adds new random color and sends the sequence to be animated
  var color = getColor(4);
  sequence.push(color);

  //Must increase speed on 5th, 9th and 13th round
  animate(sequence, speed);
}

function animate(sequence, speed) {
  var i = 0;
  var interval = setInterval(function() {
    LightUp(sequence[i]);

    i++;
    if (i >= sequence.length) {
      clearInterval(interval);
    }
  }, speed);
}

function LightUp(tile) {
  // Light the button for a short while
  var audio = 'audio' + tile;
  beep(audio);
  var $tile = $('[data-tile=' + tile + ']').addClass('brighten');
  window.setTimeout(function() {
    $tile.removeClass('brighten');
  }, 300);
}

function getColor(num) {
  /* Generate a random number between 1 and 4
  Green: 1   Red: 2   Blue: 3   Yellow: 4
  */
  return Math.floor(Math.random() * num) + 1;
}

function beep(audio) {
  // Plays the correct audio file.
  switch (audio) {
    case 'audio1':
      audio1.play();
      break;
    case 'audio2':
      audio2.play();
      break;
    case 'audio3':
      audio3.play();
      break;
    case 'audio4':
      audio4.play();
      break;
  }
}

function playerMove(sequence) {
  // Time for the user to play

}
