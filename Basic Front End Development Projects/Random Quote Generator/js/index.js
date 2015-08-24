var url = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";
var getQuote = function(data) {
  $(".quote-text").text(data.quoteText);
  if (data.quoteAuthor === '') {
    data.quoteAuthor = 'Unknown';
  }
  $(".author-text").text('Author: ' + data.quoteAuthor);
};
$(document).ready(function() {
  $.getJSON(url, getQuote, 'jsonp');
});
$("#quote").click(function() {
  $.getJSON(url, getQuote, 'jsonp');
});
$("#tweet").click(function() {
  alert('Soon Bro!');
});
