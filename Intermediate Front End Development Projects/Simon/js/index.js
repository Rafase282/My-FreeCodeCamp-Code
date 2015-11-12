// Set variables and sounds
var sequence = [];
var player = [];
var seqCopy;
var strict = false;
var power = false;
var round;
var lock = false;
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
$('.power-button').on('click', onOf);

// Set Strict mode ON and OFF
$('.strict-button').on('click', strictOpt);

// Set start/restart button ON and OFF
$('.start-button').on('click', startOpt);

// Handles user input
$('.tiles').on('click', playerMove).on('mousedown', function() {
  if (power == true) {
    var audio = 'audio' + $(this).data('tile');
    beep(audio);
    $(this).toggleClass('brighten');
  }
}).on('mouseup', function() {
  if (power == true) {
    $(this).toggleClass('brighten');
  }
});

function NewRound(sequence, speed) {
  // Adds new random color and sends the sequence to be animated
  var color = getColor(4);
  sequence.push(color);
  seqCopy = sequence;

  //Must increase speed on 5th, 9th and 13th round
  animate(sequence, speed);
  round += 1;
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
  if (power == true) {
    var position = $(this).data('tile');
    player.push(position);

    if (player.length !== sequence.length) {
      // If the two sequences are not the same size
      if (position === seqCopy.shift()) {
        // Check  to make sure the position is in the right sequence
        console.log('Passed', 'player:', player, 'sequence:', sequence,
          'current position:', position, 'checking:', seqCopy);
      } else {
        // Lost round, reset if strict, another chance if not.
        //strict ? resetGame() : player.pop() animate(sequence, speed);
        if (strict) {
          // Reset
          resetGame();
        } else {
          // Another chance, removed bad move from player and replays sequence.
          player.pop();
          animate(sequence, speed);

          // Player Moves now
        }
      }
    } else {
      // If the difference is one, then make it 0 by pushing the last position to sequence.
      NewRound(sequence, speed);
    }
  }
}

function updateRound() {
  // Display round
  $('.round-number').text(round);
}

function resetGame() {
  // Resets the board with the previous values
  sequence = [];
  player = [];
  round = 0;
  updateRound();
  lock = false;
  speed = 600;
}

function onOf() {
  // On/Off toggleClass
  $('.power-button').toggleClass('float-left float-right');
  if ($('.power-button').hasClass('float-right')) {
    power = true;
    round = 0;
    updateRound();
  } else {
    $('.strict-button').removeClass('brighten');
    $('.start-button').removeClass('brighten');
    strict = false;
    power = false;
    resetGame();
    round = '';
    updateRound();
  }
}

function strictOpt() {
  // Switch helper
  if (power == true && lock == false) {
    $('.strict-button').toggleClass('brighten');
    $('.strict-button').hasClass('brighten') ? strict = true : strict = false;
  }
}

function startOpt() {
  // Starts the game
  if (power == true) {
    $('.start-button').toggleClass('brighten');
    if ($('.start-button').hasClass('brighten')) {
      $('#start').text('RESET');
      lock = true;
      NewRound(sequence, speed);
    } else {
      $('#start').text('START');
      resetGame();
    }
  }
}
