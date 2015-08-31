$workT = $("#work-time")
$sessionT = $("#timer")
$minutes = $("#min")
$hours = $("#hour")
$breakT = $("#break-time")
$seconds = $("#sec")
$status = $("#status")

var addTime = function(section) {
  section.text(+section.text() + 1)
  var min = section.text() % 60

  if (section.text() < 60) {
    $minutes.text(section.text())
    if (min == 0 && hour > 1) {
      $hours.text(hour - 1)
    }
  }

  if (section.text() >= 60) {

    if (min == 0) {
      var hour = +$hours.text() + 1
      $hours.text(hour)
    }
    $minutes.text(min)
  }
};

var subTime = function(section) {
    if (section.text() > 1) {
      section.text(section.text() - 1)
      var min = (section.text() % 60)
      var hour = +$hours.text()

      if (section.text() < 60) {
        $minutes.text(min)
        if (min != 0 && hour >= 1) {
          $hours.text(hour - 1)
        }

      }
      if (section.text() >= 60) {
        $minutes.text(min)
        if (min == 0 && hour > 1) {
          $hours.text(hour - 1)
        }
      }
    }
  }
  // Controls for Break Length
$("#minus").click(function() {
  if ($breakT.text() > 1) {
    $breakT.text($breakT.text() - 1)
  }
});

$("#plus").click(function() {
  $breakT.text(+$breakT.text() + 1)
});

// Controls for Session Length
$("#minus2").click(function() {
  subTime($workT)
});

$("#plus2").click(function() {
  addTime($workT)
});

// Controls for Timer
$("#circle").click(function() {

  var timerId // current timer if started
  var hours = +$hours.text()
  var minutes = +$minutes.text()
  var seconds = +$seconds.text()

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

    if (hours > 0 && minutes == 0) hours--
      document.getElementById('hour').innerHTML = hours

    if (minutes > 0 && seconds == 0) minutes--
      document.getElementById('min').innerHTML = minutes

    if (seconds == 0) {
      seconds = 60
      seconds--
    }
    if (seconds > 0) seconds--
      document.getElementById('sec').innerHTML = seconds

    if (hours == 0 && minutes == 0 && seconds == 0 && $status.text() === "Work!") {
      $status.text("Break")
      $breakT.text($breakT.text() - 1)
      addTime($breakT)
    }

    if (hours == 0 && minutes == 0 && seconds == 0 && $status.text() === "Break") {
      $status.text("Work!")
      $workT.text($workT.text() - 1)
      addTime($workT)
    }
  }
  clockStart()
});
