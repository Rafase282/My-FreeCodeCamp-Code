// Function to truncate strings to custom lenght.
String.prototype.trunc = String.prototype.trunc ||
  function(n) {
    return this.length > n ? this.substr(0, n - 1) + '&hellip;' : this;
  };

$(document).ready(function() {
  // Set default values for key variables
  var url = 'http://www.freecodecamp.com/news/hot';
  var username = 'Unknown';
  var picture = 'http://i.imgur.com/vPEp5RQ.png';
  var headline = 'Undefined';
  var link = '';
  var upvotes = 0;
  var fcc = 'http://freecodecamp.com/';
  var time = 0;
  var html;

  // Call API
  $.getJSON(url, function(data) {
    // For each object in the json file, asign the right data to the variables.
    for (var news in data) {
      username = data[news].author.username;
      picture = data[news].author.picture;
      headline = data[news].headline;
      link = data[news].link;
      upvotes = data[news].upVotes.length;
      time = new Date(data[news].timePosted);

      // Generate HTML5 elements to be displayed

      html = '<article class="col-xs-2 well well-sm"><img class="logo" src="' + picture + '"><a href="' + fcc + username + '" target="_blank"><p>by' + username + '(<i class="fa fa-fire fa-fw"></i>)<span class="glyphicon glyphicon glyphicon-arrow-up"></span>' + upvotes + '</p></a><a href="' + link + '"target="_blank"><p>' + headline.trunc(50) + '</p></a><p> Posted on: ' + time.toString('ddd d, MMM yyyy') + '</p></article>';

      // Displays the elements to the page
      $('.row').append(html);
    }
  });
});
