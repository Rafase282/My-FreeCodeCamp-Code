var arrResults = [];
var html = '';

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
      $('.results').empty();
      // do something with data
      arrResults.length = 0;
      var resArr = data.query.search;
      //console.log(resArr);
      for (var result in resArr) {
        arrResults.push(new Result(resArr[result].title, resArr[result].snippet));
        html = '<div id="articles" class="well"><a href="' + resArr[result].link + '"target="_blank"><h3>' + resArr[result].title + '</h3><p>' + resArr[result].snippet + '</p></a></div>';

        // Displays the elements to the page
        $('.results').append(html);
      }
    }
  });

  if ($('#search').val().length > 0) {
    $('.articles').css('display', 'none');

  } else if ($('#search').val().length < 1) {
    // display everything again
    $('.articles').css('display', 'block');
  }

  $('#search').unbind('keyup');
  $('#search').keyup(function() {
    search();
  });
}

$('#search').keyup(function() {
  search();
});
