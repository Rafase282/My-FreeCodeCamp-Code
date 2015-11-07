/*
To-DO: Create basic machine AI,
implement smart AI, beautify the front end.
*/

// Declare Players
var player = 'X';
var machine = 'O';
var curPlayer = player;

// Declare score & position, etc
var pos = [];
var score = [0, 0];
var moves = 1;

// Set the icon for the players
$('.icon').on('click', function() {
  if ($(this).attr('id') === 'x') {
    player = 'X';
    machine = 'O';
  } else {
    player = 'O';
    machine = 'X';
  }

  curPlayer = player;

  // Adjust the right setting
  $('.player').removeClass('X');
  $('.player').addClass(player);
  $('.machine').removeClass('O');
  $('.machine').addClass(machine);
});

// Player Toggler
function PToggler(cplayer) {
  cplayer === player ? curPlayer = machine : curPlayer = player;
};

// Check for a draw
function DrawChecker() {
  if (moves === 9) {
    setTimeout(Clear, 1000);
  }
};

// Check for a win
function WinCheck() {
  switch (true) {
    case $('#r1c1').text() === curPlayer && $('#r1c2').text() === curPlayer &&
    $('#r1c3').text() === curPlayer:
      DrawLine('#r1c1', '#r1c2', '#r1c3');
      setTimeout(UpdateScore, 1000);
      break;
    case $('#r2c1').text() === curPlayer && $('#r2c2').text() === curPlayer &&
    $('#r2c3').text() === curPlayer:
      DrawLine('#r2c1', '#r2c2', '#r2c3');
      setTimeout(UpdateScore, 1000);
      break;
    case $('#r3c1').text() === curPlayer && $('#r3c2').text() === curPlayer &&
    $('#r3c3').text() === curPlayer:
      DrawLine('#r3c1', '#r3c2', '#r3c3');
      setTimeout(UpdateScore, 1000);
      break;
    case $('#r1c1').text() === curPlayer && $('#r2c1').text() === curPlayer &&
    $('#r3c1').text() === curPlayer:
      DrawLine('#r1c1', '#r2c1', '#r3c1');
      setTimeout(UpdateScore, 1000);
      break;
    case $('#r1c2').text() === curPlayer && $('#r2c2').text() === curPlayer &&
    $('#r3c2').text() === curPlayer:
      DrawLine('#r1c2', '#r2c2', '#r3c2');
      setTimeout(UpdateScore, 1000);
      break;
    case $('#r1c3').text() === curPlayer && $('#r2c3').text() === curPlayer &&
    $('#r3c3').text() === curPlayer:
      DrawLine('#r1c3', '#r2c3', '#r3c3');
      setTimeout(UpdateScore, 1000);
      break;
    case $('#r1c1').text() === curPlayer && $('#r2c2').text() === curPlayer &&
    $('#r3c3').text() === curPlayer:
      DrawLine('#r1c1', '#r2c2', '#r3c3');
      setTimeout(UpdateScore, 1000);
      break;
    case $('#r1c3').text() === curPlayer && $('#r2c2').text() === curPlayer &&
    $('#r3c1').text() === curPlayer:
      DrawLine('#r1c3', '#r2c2', '#r3c1');
      setTimeout(UpdateScore, 1000);
      break;
    default:

      DrawChecker();
  }
};

// Clarify the winning hand
function DrawLine(pos1, pos2, pos3) {
  var $pos1 = $(pos1);
  var $pos2 = $(pos2);
  var $pos3 = $(pos3);
  $pos1.addClass('winningRow');
  $pos2.addClass('winningRow');
  $pos3.addClass('winningRow');
}

// Updates the score and clears the board by calling the Clear function.
function UpdateScore() {
  $('.' + curPlayer).text(+$('.' + curPlayer).text() + 1);
  Clear();
}

//Clear the board
function Clear() {
  // Clear board
  $('.field').empty();

  // Allow board to be clickable again
  $('.field').removeClass('clicked');

  // Clear winner line
  $('div').removeClass('winningRow');

  // Reset Moves
  moves = 1;
}

//Mark position clicked
$('.field').on('click', function() {
  var id = $(this).attr('id');

  // Prevent changing already selected grid
  if (!$('#' + id).hasClass('clicked')) {
    $('#' + id).addClass('clicked');

    // Add Icon to the board
    $(this).html('<p class="ico">' + curPlayer + '</p>');

    WinCheck();
    PToggler(curPlayer);

    // Mark number of moves
    moves += 1;
  }

});
