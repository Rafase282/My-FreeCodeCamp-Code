// Setup and get geolocation from the browser.
var units = 'imperial';
var lat;
var lon;
var url;

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

function getWeather() {
  // Gets the weather after the API call.
};

function callWeatherAPI() {
  // Calls the API to get the wheather information.
  $.getJSON(getURL(lat, lon, units), getWeather, 'jsonp');
};

// Handles Unit selection
$('input[type=radio][name=farenheit-celcius]').change(Unit);
