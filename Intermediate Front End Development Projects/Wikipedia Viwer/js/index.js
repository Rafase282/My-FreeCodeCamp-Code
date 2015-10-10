var arrResults = [];

function Result(title, snippet, url) {
  this.title = title;
  this.url = url;
  this.snippet = snippet;
}

function search() {
  $.ajax({
    url: 'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=' + $('#search').val(),
    dataType: 'jsonp',
    type: 'POST',
    headers: {
      'Api-User-Agent': 'Example/1.0'
    },
    success: function(data) {
      // do something with data
      arrResults.length = 0;
      var resArr = data.query.search;
      //console.log(resArr);
      for (var result in resArr) {
        arrResults.push(new Result(resArr[result].title, resArr[result].snippet));
      }
      console.log(arrResults);
    }
  });

  if ($('#search').val().length > 0) {
    // Display matching names by hiding anything that is not what we want from the  class= "user"
    var reg = new RegExp($('#search').val(), 'ig');
    $('.user').css('display', 'none');

  } else if ($('#search').val().length < 1) {
    // display everything again
    $('.user').css('display', 'block');
  }

  $('#search').unbind('keyup');
  $('#search').keyup(function() {
    search();
  });
}

$('#search').keyup(function() {
  search();
});
