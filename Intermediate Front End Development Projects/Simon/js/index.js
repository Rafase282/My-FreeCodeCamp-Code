// Set variables and sounds
var sequence = [];
var player = [];
var seqCopy;
var strict = false;
var power = false;
var round;
var win;
var lock = false;
var speed = 800;
var audio1 = new Audio(
  'http://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
var audio2 = new Audio(
  'http://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
var audio3 = new Audio(
  'http://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
var audio4 = new Audio(
  'http://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
var audioBuzzer = new Audio('https://s3-us-west-2.amazonaws.com/guylemon/Buzzer.mp3');

// Handles ON and OFF
$('.power-button').on('click', onOf);

// Set Strict mode ON and OFF
$('.strict-button').on('click', strictOpt);

// Set start/restart button ON and OFF
$('.start-button').on('click', startOpt);

//Click listener for .win and .lose
$('.win').click(function() {
  $('.win').addClass('hidden');
});

$('.lose').click(function() {
  $('.lose').addClass('hidden');
});

$('.play-again').click(function() {
  $('lose').addClass('hidden');
  $('.win').addClass('hidden');
  resetGame();
});

$('.quit').click(function() {
  $('lose').addClass('hidden');
  $('.win').addClass('hidden');
  onOf();
});

// Handles user input
$('.tiles').on('click', playerMove).on('mousedown', function() {
  if (power == true && lock == true) {
    $(this).toggleClass('brighten');
  }
}).on('mouseup', function() {
  if (power == true && lock == true) {
    $(this).toggleClass('brighten');
  }
});

function NewRound() {
  // Adds new random color and sends the sequence to be animated
  var color = getColor(4);
  sequence.push(color);
  seqCopy = copyArr(sequence);
  player = [];

  //Must increase speed on 5th, 9th and 13th round
  if (round >= 4) speed = 400;
  if (round >= 8) speed = 200;
  if (round >= 12) speed = 100;
  animate();
  round += 1;
  updateRound();
}

function copyArr(argument) {
  // makes a duplicate of sequence
  var a = argument;
  var length = a.length;
  var b = new Array(length);

  while (length--) {
    b[length] = a[length];
  }

  return b;
}

function animate() {
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
  }, speed / 2);
}

function getColor(num) {
  /* Generate a random number between 1 and 4
  Green: 1   Red: 2   Blue: 3   Yellow: 4
  */
  return Math.floor(Math.random() * num) + 1;
}

function beep(audio) {
  // Plays the correct audio file.
  //
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
    case 'audioBuzzer':
      audioBuzzer.play();
      break;
  }
}

function strictON() {
  // Handles the case of strict being on.
  if (strict == true) {
    // Reset
    win = false;
    gameOver();
    resetGame();
  } else {
    // Another chance, removed bad move from player and replays sequence.
    player = [];
    animate();

    // Player Moves now
  }
}

function updateRound() {
  // Display round
  $('.round-number').text(round);
}

function resetGame() {
  // Resets the board with the previous values
  $('.start-button').removeClass('brighten');
  $('#start').text('START');
  sequence = [];
  player = [];
  round = 0;
  updateRound();
  lock = false;
  speed = 600;
}

function onOf() {
  // On-Off toggleClass
  $('.power-button').toggleClass('float-left float-right');
  if ($('.power-button').hasClass('float-right')) {
    power = true;
    round = 0;
    updateRound();
  } else {
    $('.strict-button').removeClass('brighten');
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
      NewRound();
    } else {
      $('#start').text('START');
      resetGame();
    }
  }
}

//Game over function
function gameOver() {
  // Handle the game over case
  if (win == true) {
    //Display, player Wins!
    $('.win').removeClass('hidden');
  } else {
    //Display player lost
    $('.lose').removeClass('hidden');
  }
}

function playerMove() {
  // Time for the user to play
  if (power == true && lock == true) {
    var position = $(this).data('tile');
    player.push(position);

    //If the player entry is incorrect at any point, play the buzzersound and start the sequence again. [1,2,3,4]
    if (player[player.length - 1] !== sequence[player.length - 1]) {
      beep('audioBuzzer');
      strictON();
    } else {
      var audio = 'audio' + $(this).data('tile');
      beep(audio);

      // exp = while sequence is greater than player or it is one.
      var exp = sequence.length === player.length;
      if (exp) {
        // If it is round 20, set win to true and call gameover.
        if (round === 20) {
          win = true;
          gameOver();
        } else {
          NewRound();
        }
      }
    }
  }
}
