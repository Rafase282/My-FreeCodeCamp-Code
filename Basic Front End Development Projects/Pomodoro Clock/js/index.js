//jQuery Variables
$workT = $("#work-time")
$sessionT = $("#timer")
$minutes = $("#min")
$hours = $("#hour")
$breakT = $("#break-time")

// Controls for Break Length
$("#minus").click(function() {
  if ($breakT.text() > 0) {
    $breakT.text($breakT.text() - 1)
  }
});

$("#plus").click(function() {
  $breakT.text(+$breakT.text() + 1)
});

// Controls for Session Length
$("#minus2").click(function() {
  if ($workT.text() > 0) {
    $workT.text($workT.text() - 1)
    var min = ($workT.text() % 60)
    var hour = +$hours.text()

    if ($workT.text() < 60) {
      $minutes.text(min)
      if (min != 0 && hour >= 1) {
        $hours.text(hour - 1)
      }

    }
    if ($workT.text() >= 60) {
      $minutes.text(min)
      if (min == 0 && hour > 1) {
        $hours.text(hour - 1)
      }
    }
  }
});

$("#plus2").click(function() {
  $workT.text(+$workT.text() + 1)
  var min = $workT.text() % 60

  if ($workT.text() < 60) {
    $minutes.text($workT.text())
    if (min == 0 && hour > 1) {
      $hours.text(hour - 1)
    }
  }

  if ($workT.text() >= 60) {
    if (min == 0) {
      var hour = +$hours.text() + 1
      $hours.text(hour)
    }
    $minutes.text(min)
  }

});

// Controls for Timer
$("#circle").click(function() {
  // Work in progress
  var timerId // current timer if started

  function clockStart() {
    if (timerId) return

    timerId = setInterval(update, 1000)
    update() // (*)
  }

  function clockStop() {
    clearInterval(timerId)
    timerId = null
  }

  function update() {
    var date = new Date()

    var hours = date.getHours()
    if (hours < 10) hours = '0' + hours
    document.getElementById('hour').innerHTML = hours

    var minutes = date.getMinutes()
    if (minutes < 10) minutes = '0' + minutes
    document.getElementById('min').innerHTML = minutes

    var seconds = date.getSeconds()
    if (seconds < 10) seconds = '0' + seconds
    document.getElementById('sec').innerHTML = seconds
  }

});
