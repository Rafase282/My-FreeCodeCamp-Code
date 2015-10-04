$(document).ready(function() {
  var url = 'http://www.freecodecamp.com/news/hot';
  var username = 'Unknown';
  var picture = 'http://i.imgur.com/vPEp5RQ.png';
  var headline = 'Undefined';
  var link = '';
  var upvotes = 0;
  var fcc = 'http://freecodecamp.com/';
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
      html = '<article class= " col-sm-1 col-md-2 well well-sm"><img class= \'logo\' src = "' + picture + '">' + ' <a href="' + fcc + username + '" target="_blank"><p>' + 'by ' + username + ' (<i class="fa fa-fire fa-fw"></i>)</a> <span class="glyphicon glyphicon glyphicon-arrow-up"></span> ' + upvotes + '</p> <a href="' + link + '" target="_blank"><p>' + headline + '</p></a>' + '<p> Posted on: ' + time + '</p></article>';

      $('.row').append(news + 1 % 6 === 0 ? '</div><div class="row">' : '' + html);
    }
  });
});
