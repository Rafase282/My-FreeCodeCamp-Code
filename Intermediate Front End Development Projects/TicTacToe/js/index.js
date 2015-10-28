var player = 'X';
var machine = 'O';
$('.icon').on("click", function() {
  if ($(this).attr('id') === 'x') {
    player = 'X';
    machine = 'O';
  } else {
    player = 'O';
    machine = 'X';
  }
  console.log(player);
});
