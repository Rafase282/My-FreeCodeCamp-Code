// Set variables and sounds
var sequence = [];
var player = [];
var strict = false;
var round = 0;
var speed = 600;
var audio1 = new Audio(
  'http://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
var audio2 = new Audio(
  'http://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
var audio3 = new Audio(
  'http://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
var audio4 = new Audio(
  'http://s3.amazonaws.com/freecodecamp/simonSound4.mp3');

// Handles ON and OFF
$('.power-button').on('click', function() {
  $(this).toggleClass('float-left float-right');
  NewRound(sequence, speed);
});

// Set Strict mode ON and OFF
$('.strict-button').on('click', function() {
  $(this).toggleClass('brighten');
});

// Set start/restart button ON and OFF
$('.start-button').on('click', function() {
  $(this).toggleClass('brighten');
});

// Handles user input
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
  updateRound();
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

function playerMove() {
  // Time for the user to play
  var position = $(this).data('tile');
  player.push(position);

  if (position === sequence.shift()) {
    console.log('good', player, sequence);
    sequence.push(position);
    NewRound(sequence, speed);
  } else {
    console.log('Bad');
  }
}

function updateRound() {
  // Update Round and display it
  round += 1;
  $('.round-number').text(round);
}
