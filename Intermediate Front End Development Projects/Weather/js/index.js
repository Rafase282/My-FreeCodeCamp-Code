var latitude;
var longitude;
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

  });

}