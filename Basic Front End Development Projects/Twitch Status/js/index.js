var accounts = ['freecodecamp', 'storbeck', 'terakilobyte', 'habathcx', 'RobotCaleb', 'thomasballinger', 'noobs2ninjas', 'beohoff', 'MedryBW', 'brunofin', 'comster404', 'quill18'];
var firstPassPos = 1;
var secondPassPos = 1;
var logo = 'http://i.imgur.com/vPEp5RQ.png';
var streams = 'https://api.twitch.tv/kraken/streams/';
var users = 'https://api.twitch.tv/kraken/users/';
var sd = {};

$(document).ready(function() {
  function account(name, logo, status, STREAM_LINK, data) {
    this.name = name;
    this.logo = logo;
    this.status = status;
    this.STREAM_LINK = STREAM_LINK;
    this.data = null;
  }

  function render() {
    console.log(sd);
    for (var stream in sd) {
      $('.list').append(
        '<div>' + '<img class= \'logo\' src = "' + sd[stream].logo + '">' + sd[stream].name + '<p>' + sd[stream].status + '</p></div>'
      );
    }
  }

  function getUserInfo(currentName) {
    $.getJSON(users + currentName + '?callback=?', function(response) {
      if (response.logo === null) {
        currentName = new account(response.display_name, logo);
      } else {
        currentName = new account(response.display_name, response.logo);
      };

      firstPassPos++;
      sd[currentName.name] = currentName;
      if (firstPassPos === accounts.length) {
        for (var key in sd) {
          getStreamInfo(sd[key]);
        }
      }
    });
  }

  function getStreamInfo(currentStream) {
    $.getJSON(streams + currentStream.name + '?callback=?', function(feed) {
      secondPassPos++;
      if (feed.stream !== null && feed.stream !== 'undefined') {
        currentStream.status = feed.stream.channel.status;
        currentStream.STREAM_LINK = feed.stream.channel.url;
        if (secondPassPos === accounts.length) {
          render();
        }
      };
    });
  }

  accounts.forEach(getUserInfo);
});
