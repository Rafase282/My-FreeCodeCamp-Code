// Declare Players
var player = 'X';
var machine = 'O';

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
var score = [0, 0];

// Set the icon for the players
$('.icon').on('click', function() {
  if ($(this).attr('id') === 'x') {
    player = 'X';
    machine = 'O';
  } else {
    player = 'O';
    machine = 'X';
  }
});

$('.field').on('click', function() {
  switch ($(this).attr('id')) {
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

});
