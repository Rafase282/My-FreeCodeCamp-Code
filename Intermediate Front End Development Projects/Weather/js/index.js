// Setup and get geolocation from the browser.
var units = 'imperial';
var lat;
var lon;
var url;

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
};

function showPosition(position) {
  lat = position.coords.latitude;
  lon = position.coords.longitude;
};

function getURL(lat, lon, units) {
  // Generates custom URL
  return 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat +
    '&lon=' +
    lon + '&units=' + units;
};

function Unit() {
  // Selects the right unit for the weather and calls the API
  $('#f').is(':checked') ? units = 'imperial' : units = 'metric';
};

function getWeather() {
  // Calls the API to get the wheather information.
};

$('input[type=radio][name=farenheit-celcius]').change(Unit);
$.getJSON(getURL(lat, lon, units), getWeather, 'jsonp');
