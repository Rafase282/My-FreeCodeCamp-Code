// Declare Players
var player = 'X';
var machine = 'O';
var curPlayer = player;

// Declare position and grid
var grid = [
  [1, 1],
  [1, 2],
  [1, 3],
  [2, 1],
  [2, 2],
  [2, 3],
  [3, 1],
  [3, 2],
  [3, 3],
];
var pos = [];
var pMoves = [];
var mMoves = [];
var score = [0, 0];
var winPos = [
  [
    [1, 1],
    [1, 2],
    [1, 3],
  ],
  [
    [2, 1],
    [2, 2],
    [2, 3],
  ],
  [
    [3, 1],
    [3, 2],
    [3, 3],
  ],
];

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
  $('.player').removeClass('X');
  $('.player').addClass(player);
  $('.machine').removeClass('O');
  $('.machine').addClass(machine);
});

// Player Toggler
function PToggler(cplayer) {
  cplayer === player ? curPlayer = machine : curPlayer = player;
};

// Check for a win
function WinCheck(curBoard) {
  for (var i = 0; i < winPos.length; i++) {
    for (var j = 0; j < curBoard.length; j++) {
      curBoard[j] == winPos[i]
    }
  }
});

console.log(chk, '.' + curPlayer);

// If we got a win then update score and clear up the board
$('.' + curPlayer).text(+$('.' + curPlayer).text() + 1);

//Clear();

};

//Clear the board
function Clear() {
  $('.field').empty();
}

//Mark position clicked
$('.field').on('click', function() {
  var id = $(this).attr('id');
  switch (id) {
    case 'r1c1':
      pos = [1, 1];
      break;
    case 'r1c2':
      pos = [1, 2];
      break;
    case 'r1c3':
      pos = [1, 3];
      break;
    case 'r2c1':
      pos = [2, 1];
      break;
    case 'r2c2':
      pos = [2, 2];
      break;
    case 'r2c3':
      pos = [2, 3];
      break;
    case 'r3c1':
      pos = [3, 1];
      break;
    case 'r3c2':
      pos = [3, 2];
      break;
    case 'r3c3':
      pos = [3, 3];
      break;
  }

  $(this).html('<p class="ico">' + curPlayer + '</p>');
  if (curPlayer === machine) {
    mMoves.push(pos);
    WinCheck(mMoves);
  } else {
    pMoves.push(pos);
    WinCheck(pMoves);
  }

  PToggler(curPlayer);

});
