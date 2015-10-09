var url = 'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=rafael';
var query = $('#search').val();

function search() {

  // Option 1
  $.getJSON(url + query, function(response) {
    console.log(data);
    var title = data.query.pages[0].title;
    console.log(title);
  });

  // Option 2
  $.ajax({
    url: url,
    action: 'query',
    list: 'search',
    format: 'json',
    srsearch: query,
    dataType: 'jsonp',
    type: 'POST',
    headers: {
      'Api-User-Agent': 'Example/1.0'
    },
    success: function(data) {
      // do something with data
      console.log(data);
      var title = data.query.pages[0].title;
      console.log(title);
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
