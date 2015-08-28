var getLocation = function(data) {
  lat = data.lat;
  lon = data.lon;
  city = data.city;
  state = data.regionName;
  url = 'http://api.openweathermap.org/data/2.5/weather?' + 'lat=' + data.lat + '&lon=' + data.lon + '&units=';
  getWeather = function(data) {
    temp = data.main.temp;
    description = data.weather[0].description;
    code = data.weather[0].icon;
    wspeed = data.wind.speed;
    html = '<img src="http://openweathermap.org/img/w/' + code + '.png" alt="Weather Icon">' + '<p> ' + Math.round(temp) + ' F, ' + description + '<br> Wind Speed: ' + wspeed + ' mph</p><p>' + city + ', ' + state + '</p>';
    $("#weather").html(html);
  };
  $.getJSON(url + 'imperial', getWeather, 'jsonp');
};

$(document).ready(function() {
  $.getJSON('http://ip-api.com/json', getLocation, 'jsonp');
  $('input[type=radio][name=farenheit-celcius]').change(function() {
    if ($('#f').is(':checked')) {
      $.getJSON(url + 'imperial', getWeather, 'jsonp');
      html = '<img src="http://openweathermap.org/img/w/' + code + '.png" alt="Weather Icon">' + '<p> ' + Math.round(temp) + ' F, ' + description + '<br> Wind Speed: ' + wspeed + ' mph</p><p>' + city + ', ' + state + '</p>';
      $("#weather").html(html);
    } else {
      $.getJSON(url + 'metric', getWeather, 'jsonp');
      html = '<img src="http://openweathermap.org/img/w/' + code + '.png" alt="Weather Icon">' + '<p> ' + Math.round(temp) + ' F, ' + description + '<br> Wind Speed: ' + wspeed + ' km/h</p><p>' + city + ', ' + state + '</p>';
      $("#weather").html(html);
    }
  });
});
