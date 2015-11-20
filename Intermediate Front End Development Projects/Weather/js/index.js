// Setup and get geolocation from the browser.
var units = 'imperial';
var imgs = [
  'url("http://i.imgur.com/eI5KLUW.jpg")',
  'url("http://i.imgur.com/rG0P1ro.jpg")',
  'url("http://i.imgur.com/voCuONs.jpg")',
  'url("http://i.imgur.com/5tFHSKa.jpg")',
];
var Coordinates = function(lat, lon) {
  this.latitude = lat;
  this.longitude = lon;
};

var coord = new Coordinates(0, 0);

function getLocation() {
  // Request location consent from user
  var display = document.getElementById('weather');
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    display.innerHTML = 'Geolocation is not supported by this browser.';
  }
};

function showPosition(position) {
  // Stores requested into on global variables.
  coord.latitude = position.coords.latitude;
  coord.longitude = position.coords.longitude;
  callWeatherAPI();
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
  callWeatherAPI();
};

function getWeather(data) {
  // Gets the weather after the API call.
  var temp = data.main.temp;
  var tempUnit = units === 'metric' ? 'C' : 'F';
  var windUnit = units === 'metric' ? ' meters/sec' : ' miles/hour';
  var description = data.weather[0].description;
  var code = data.weather[0].icon;
  var wspeed = data.wind.speed;
  var city = data.name;

  // Create custom HTML to display all the information gathered.
  var html = '<img src="http://openweathermap.org/img/w/' + code +
    '.png" alt="Weather Icon" class="icon">' + '<p> ' + Math.round(temp) + ' ' + tempUnit +
    ', ' + description + '<br> Wind Speed: ' + wspeed + windUnit + '</p><p>' +
    city + '</p>';

  // Displays the custom HTML
  $('#weather').html(html);
  var tempArr = prepBackground(tempUnit);
  setBackground(temp, tempArr);

};

function setBackground(temp, tempArr) {
  // Select custom backgroudn image according to temperature range.
  if (temp >= tempArr[0]) {
    $('body').css('background-image', imgs[0]);
  } else if (temp < tempArr[0] && temp >= tempArr[1]) {
    $('body').css('background-image', imgs[1]);
  } else if (temp < tempArr[1] && temp >= tempArr[2]) {
    $('body').css('background-image', imgs[2]);
  } else if (temp < tempArr[2]) {
    $('body').css('background-image', imgs[3]);
  }
};

function prepBackground(tempUnit) {
  // Checks what kind style of temperature was used for dynamic background image.
  var tempArr;
  switch (tempUnit) {
    case 'F':
      tempArr = [90, 70, 32];
      break;
    case 'C':
      tempArr = [32, 21, 0];
      break;
  }
  return tempArr;
};

function callWeatherAPI() {
  // Calls the API to get the wheather information.
  var url = getURL(coord.latitude, coord.longitude, units);
  $.getJSON(url, getWeather);
};

function start() {
  // Function to call all functions and make the app tic
  getLocation();
  callWeatherAPI();
};

// Handles Unit selection
$('input[type=radio][name=farenheit-celcius]').change(Unit);
$(document).ready(getLocation);
