$(document).ready(function() {
  var url = 'http://www.freecodecamp.com/news/hot';
  var username = 'Unknown';
  var picture = 'http://i.imgur.com/vPEp5RQ.png';
  var headline = 'Undefined';
  var link = '';
  var upvotes = 0;
  var fcc = 'http://freecodecamp/';
  var time = 0;
  var html;

  $.getJSON(url, function(data) {
    for (var news in data) {
      username = data[news].author.username;
      picture = data[news].author.picture;
      headline = data[news].headline;
      link = data[news].link;
      upvotes = data[news].upVotes.length;
      time = new Date(data[news].timePosted);
      html = '<div class= "user"><img class= \'logo\' src = "' + picture + '">' + ' <a href="' + fcc + username + '" target="_blank"><p class= \'stat\'>' + 'by ' + username + ' (<i class="fa fa-fire fa-fw"></i>)</p></a>' + ' <a href="' + link + '" target="_blank"><p class= \'stat\'>' + headline + '</p></a>' + '<p class= \'stat\'> <span class="glyphicon glyphicon glyphicon-arrow-up"></span> ' + upvotes + ' Posted on: ' + time + '</p></div>';

      $('.list').append(html);
    }
  });
});
