var getLocation = function(data) {
  var weather = "http://api.openweathermap.org/data/2.5/weather?";
  var lat = data.lat;
  var lon = data.lon;
  var city = data.city;
  var state = data.regionName;
  var temp = weather + 'lat=' + lat + '&lon=' + lon + format;
  console.log(temp);

  var getWeather = function(data) {
    var temp = data.main.temp;
    var description = data.weather[0].description;
    html = '<i class="icon-' + data.weather.code + '"></i><p>' + temp + ' ' + description + '</p><p>' + city + ', ' + state + '</p>';
    $("#weather").html(html);
  };

  $.getJSON(temp, getWeather, 'jsonp');

};

$(document).ready(function() {
  $.getJSON('http://ip-api.com/json', getLocation, 'jsonp');
});
