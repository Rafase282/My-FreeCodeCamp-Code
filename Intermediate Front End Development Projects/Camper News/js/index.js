$(document).ready(function() {
  var url = 'http://www.freecodecamp.com/news/hot';
  var username = 'Unknown';
  var picture = 'http://i.imgur.com/vPEp5RQ.png';
  var headline = 'Undefined';
  var link = '';
  var upvotes = 0;

  $.getJSON(url, function(data) {
    var items = [];
    console.log(data);
    for (var news in data) {
      username = news.author.username;
      picture = news.author.picture;
      headline = news.headline;
      link = news.link;
      upvotes = news.upVotes.length;

    }
  });
});
