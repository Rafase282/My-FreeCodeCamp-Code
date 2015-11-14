// Setup and get geolocation from the browser.
var units = 'imperial';
var lat;
var lon;
var url;
var imgs = [
  'url("http://i.imgur.com/eI5KLUW.jpg")',
  'url("http://i.imgur.com/rG0P1ro.jpg")',
  'url("http://i.imgur.com/voCuONs.jpg")',
  'url("http://i.imgur.com/5tFHSKa.jpg")',
];

function getLocation() {
  // Request location consent from user
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = 'Geolocation is not supported by this browser.';
  }
};

function showPosition(position) {
  // Stores requested into on global variables.
  lat = position.coords.latitude;
  lon = position.coords.longitude;
};

function getURL(lat, lon, units) {
  // Generates custom URL, the appid is unique for this app.
  var appid = '16c3de9108ed16c9179c1c51008b687e';
  return 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat +
    '&lon=' +
    lon + '&units=' + units + '&appid=' + appid;
};

function Unit() {
  // Selects the right unit for the weather and calls the API
  $('#f').is(':checked') ? units = 'imperial' : units = 'metric';
};

function getWeather(data) {
  // Gets the weather after the API call.
  var temp = data.main.temp;
  var tempUnit = units === 'metric' ? 'C' : 'F';
  var windUnit = units === 'metric' ? ' meters/s' : ' miles/h';
  var description = data.weather[0].description;
  var code = data.weather[0].icon;
  var wspeed = data.wind.speed;

  // Create custom HTML to display all the information gathered.
  var html = '<img src="http://openweathermap.org/img/w/' + code +
    '.png" alt="Weather Icon">' + '<p> ' + Math.round(temp) + ' ' + tempUnit +
    ', ' + description + '<br> Wind Speed: ' + wspeed + windUnit + '</p><p>' +
    city + ', ' + state + '</p>';

  // Displays the custom HTML
  $('#weather').html(html);
  prepBackground();
  setBackground();

};

function setBackground() {
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

function prepBackground() {
  // Checks what kind style of temperature was used for dynamic background image.
  switch (tempUnit) {
    case 'F':
      var temps = [90, 70, 32];
      break;
    case 'C':
      temps = [32, 21, 0];
      break;
  }
};

function callWeatherAPI() {
  // Calls the API to get the wheather information.
  $.getJSON(getURL(lat, lon, units), getWeather, 'jsonp');
};

// Handles Unit selection
$('input[type=radio][name=farenheit-celcius]').change(Unit);
