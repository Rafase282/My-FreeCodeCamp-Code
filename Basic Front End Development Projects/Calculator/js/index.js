var operands = ['+', '-', '*', '/', '%', '.'];

function Check() {
  var lastChar = $('#result').text().slice(-1);
  for (var i = 0; i < operands.length; i++) {
    if (operands[i] == lastChar) {
      $('#result').text('Err');
    }
  }
}
$('#clear-all').click(function() {
  $('#result').text('');
});

$('#clear').click(function() {
  $('#result').text('');
});

$('#plus').click(function() {
  Check();
  $('#result').text($('#result').text() + '+');
});

$('#op').click(function() {
  Check();
  $('#result').text($('#result').text() + '(');
});

$('#clo').click(function() {
  Check();
  $('#result').text($('#result').text() + ')');
});

$('#minus').click(function() {
  Check();
  $('#result').text($('#result').text() + '-');
});

$('#mult').click(function() {
  Check();
  $('#result').text($('#result').text() + '*');
});

$('#division').click(function() {
  Check();
  $('#result').text($('#result').text() + '/');
});

$('#mod').click(function() {
  Check();
  $('#result').text($('#result').text() + '%');
});

$('#dec').click(function() {
  Check();
  $('#result').text($('#result').text() + '.');
});

$('#eq').click(function() {
  $('#result').text(eval($('#result').text()));
});

$('#nine').click(function() {
  $('#result').text($('#result').text() + 9);
});

$('#eight').click(function() {
  $('#result').text($('#result').text() + 8);
});

$('#seven').click(function() {
  $('#result').text($('#result').text() + 7);
});

$('#six').click(function() {
  $('#result').text($('#result').text() + 6);
});

$('#five').click(function() {
  $('#result').text($('#result').text() + 5);
});

$('#four').click(function() {
  $('#result').text($('#result').text() + 4);
});

$('#three').click(function() {
  $('#result').text($('#result').text() + 3);
});

$('#two').click(function() {
  $('#result').text($('#result').text() + 2);
});

$('#one').click(function() {
  $('#result').text($('#result').text() + 1);
});

$('#zero').click(function() {
  $('#result').text($('#result').text() + 0);
});
