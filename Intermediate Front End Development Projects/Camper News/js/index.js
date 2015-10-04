$(document).ready(function() {
  var url = 'http://www.freecodecamp.com/news/hot';
  $.getJSON(url, getNews, 'jsonp');

});

function getNews(data) {
  var id = data.id;

};
