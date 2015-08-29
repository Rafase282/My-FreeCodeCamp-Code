units = 'imperial';

var getLocation = function(data) {
  var lat = data.lat;
  var lon = data.lon;
  var city = data.city;
  var state = data.regionName;
  url = 'http://api.openweathermap.org/data/2.5/weather?' + 'lat=' + data.lat + '&lon=' + data.lon + '&units=';

  getWeather = function(data) {
    var temp = data.main.temp;
    var tempUnit = units === 'metric' ? 'C' : 'F';
    var windUnit = units === 'metric' ? ' knots' : ' km/h';
    var description = data.weather[0].description;
    var code = data.weather[0].icon;
    var wspeed = data.wind.speed;
    var html = '<img src="http://openweathermap.org/img/w/' + code + '.png" alt="Weather Icon">' + '<p> ' + Math.round(temp) + ' ' + tempUnit + ', ' + description + '<br> Wind Speed: ' + wspeed + windUnit + '</p><p>' + city + ', ' + state + '</p>';
    $("#weather").html(html);
  };
  $.getJSON(url + 'imperial', getWeather, 'jsonp');
};

$(document).ready(function() {
  $.getJSON('http://ip-api.com/json', getLocation, 'jsonp');
  $('input[type=radio][name=farenheit-celcius]').change(function() {
    if ($('#f').is(':checked')) {
      units = 'imperial'
    } else {
      units = 'metric'
    }
    $.getJSON(url + units, getWeather, 'jsonp');
  });
});
