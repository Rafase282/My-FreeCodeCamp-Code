/*global $, url, getWeather*/
var units = 'imperial';

// Function to work with Location API to get Longitude, Latitude, City and State to bed used with the weather API
var getLocation = function(data) {
  var appid = '16c3de9108ed16c9179c1c51008b687e';
  var lat = data.lat;
  var lon = data.lon;
  var city = data.city;
  var state = data.regionName;

  // Custom url for the weather API, it is only missing imperial or metric format.
  url = 'http://api.openweathermap.org/data/2.5/weather?' + 'lat=' + lat + '&lon=' + lon +
    '&appid=' + appid + '&units=';

  // Function to get the Weather info and display it.
  getWeather = function(data) {
    var temp = data.main.temp;
    var tempUnit = units === 'metric' ? 'C' : 'F';
    var windUnit = units === 'metric' ? ' meters/sec' : ' miles/hour';
    var description = data.weather[0].description;
    var code = data.weather[0].icon;
    var wspeed = data.wind.speed;

    // Create custom HTML to display all the information gathered.
    var html = '<img src="http://openweathermap.org/img/w/' + code +
      '.png" alt="Weather Icon">' + '<p> ' + Math.round(temp) + ' ' + tempUnit + ', ' +
      description + '<br> Wind Speed: ' + wspeed + windUnit + '</p><p>' + city + ', ' + state +
      '</p>';

    // Displays the custom HTML
    $('#weather').html(html);

    // Checks what kind style of temperature was used for dynamic background image.
    switch (tempUnit) {
      case 'F':
        var temps = [90, 70, 32];
        break;
      case 'C':
        temps = [32, 21, 0];
        break;
    }

    // Array of backgroudn images.
    var imgs = ['url("http://i.imgur.com/eI5KLUW.jpg")',
      'url("http://i.imgur.com/rG0P1ro.jpg")', 'url("http://i.imgur.com/voCuONs.jpg")',
      'url("http://i.imgur.com/5tFHSKa.jpg")',
    ];

    // Select custom backgroudn image according to temperature range.
    if (temp >= temps[0]) {
      $('body').css('background-image', imgs[0]);
    } else if (temp < temps[0] && temp >= temps[1]) {
      $('body').css('background-image', imgs[1]);
    } else if (temp < temps[1] && temp >= temps[2]) {
      $('body').css('background-image', imgs[2]);
    } else if (temp < temps[2]) {
      $('body').css('background-image', imgs[3]);
    }
  };

  // Calls the Weather API
  $.getJSON(url + 'imperial', getWeather);
};

// When the documet finished loading call the Location API
$(document).ready(function() {
  $.getJSON('http://ip-api.com/json', getLocation);

  // Handler for opetion between Metric and Imperial style temperature
  $('input[type=radio][name=farenheit-celcius]').change(function() {
    if ($('#f').is(':checked')) {
      units = 'imperial';
    } else {
      units = 'metric';
    };

    $.getJSON(url + units, getWeather);
  });
});
