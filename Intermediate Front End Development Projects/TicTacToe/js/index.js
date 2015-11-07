// Declare Players
var player = 'X';
var machine = 'O';
var curPlayer = player;

// Other needed Variables
var gameOver = false;
var lockIcon = false;
var moves = 1;

$('.field').on('click', MarkPosition);

$('.icon').on('click', SetIcon);

// Set the icon for the players
function SetIcon() {
  if ($(this).attr('id') === 'X' && !lockIcon) {
    player = 'X';
    machine = 'O';
    lockIcon = true;
  } else if ($(this).attr('id') === 'O' && !lockIcon) {
    player = 'O';
    machine = 'X';
    lockIcon = true;
  }

  curPlayer = player;

  // Adjust the right setting
  $('.player').removeClass('X');
  $('.player').removeClass('O');
  $('.machine').removeClass('O');
  $('.machine').removeClass('X');
  $('.player').addClass(player);
  $('.machine').addClass(machine);
};

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
      gameOver = true;
      setTimeout(UpdateScore, 1000);
      break;
    case $('#r2c1').text() === curPlayer && $('#r2c2').text() === curPlayer &&
    $('#r2c3').text() === curPlayer:
      DrawLine('#r2c1', '#r2c2', '#r2c3');
      gameOver = true;
      setTimeout(UpdateScore, 1000);
      break;
    case $('#r3c1').text() === curPlayer && $('#r3c2').text() === curPlayer &&
    $('#r3c3').text() === curPlayer:
      DrawLine('#r3c1', '#r3c2', '#r3c3');
      gameOver = true;
      setTimeout(UpdateScore, 1000);
      break;
    case $('#r1c1').text() === curPlayer && $('#r2c1').text() === curPlayer &&
    $('#r3c1').text() === curPlayer:
      DrawLine('#r1c1', '#r2c1', '#r3c1');
      gameOver = true;
      setTimeout(UpdateScore, 1000);
      break;
    case $('#r1c2').text() === curPlayer && $('#r2c2').text() === curPlayer &&
    $('#r3c2').text() === curPlayer:
      DrawLine('#r1c2', '#r2c2', '#r3c2');
      gameOver = true;
      setTimeout(UpdateScore, 1000);
      break;
    case $('#r1c3').text() === curPlayer && $('#r2c3').text() === curPlayer &&
    $('#r3c3').text() === curPlayer:
      DrawLine('#r1c3', '#r2c3', '#r3c3');
      gameOver = true;
      setTimeout(UpdateScore, 1000);
      break;
    case $('#r1c1').text() === curPlayer && $('#r2c2').text() === curPlayer &&
    $('#r3c3').text() === curPlayer:
      DrawLine('#r1c1', '#r2c2', '#r3c3');
      gameOver = true;
      setTimeout(UpdateScore, 1000);
      break;
    case $('#r1c3').text() === curPlayer && $('#r2c2').text() === curPlayer &&
    $('#r3c1').text() === curPlayer:
      DrawLine('#r1c3', '#r2c2', '#r3c1');
      gameOver = true;
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
  PToggler(curPlayer);
}

// Updates the score and clears the board by calling the Clear function.
function UpdateScore() {
  console.log(curPlayer);
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

  // Reset gameover
  gameOver = false;

  // Reset Player to chosen one.
  SetIcon();

};

// FUnctiont o draw icon on the board.
function DrawIcon(id) {
  $('#' + id).html('<p class="ico">' + curPlayer + '</p>');
}

//Mark position clicked
function MarkPosition() {
  lockIcon = true;
  var id = $(this).attr('id');

  // Prevent changing already selected grid
  if (!$('#' + id).hasClass('clicked')) {
    $('#' + id).addClass('clicked');

    // Add Icon to the board
    DrawIcon(id);

    WinCheck();

    // Mark number of moves
    moves += 1;

    PToggler(curPlayer);

    // Add Icon to the board for machine
    if (gameOver === false && moves % 2 === 0) {
      MachineAI();
      WinCheck();
      moves += 1;
      PToggler(curPlayer);
    }
  }
};

// just place moves on the board, bare minimum implementation
function MachineAI() {
  switch (true) {
    case $('#r1c1').text() !== player && $('#r1c1').text() !== machine:
      DrawIcon('r1c1');
      break;
    case $('#r1c2').text() !== player && $('#r1c2').text() !== machine:
      DrawIcon('r1c2');
      break;
    case $('#r1c3').text() !== player && $('#r1c3').text() !== machine:
      DrawIcon('r1c3');
      break;
    case $('#r2c1').text() !== player && $('#r2c1').text() !== machine:
      DrawIcon('r2c1');
      break;
    case $('#r2c2').text() !== player && $('#r2c2').text() !== machine:
      DrawIcon('r2c2');
      break;
    case $('#r2c3').text() !== player && $('#r2c3').text() !== machine:
      DrawIcon('r2c3');
      break;
    case $('#r3c1').text() !== player && $('#r3c1').text() !== machine:
      DrawIcon('r3c1');
      break;
    case $('#r3c2').text() !== player && $('#r3c2').text() !== machine:
      DrawIcon('r3c2');
      break;
    case $('r3c3').text() !== player && $('#r2c3').text() !== machine:
      DrawIcon('r3c3');
      break;
  }
};
