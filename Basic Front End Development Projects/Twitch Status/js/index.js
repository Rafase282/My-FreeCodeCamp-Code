var accounts = ['freecodecamp', 'storbeck', 'terakilobyte', 'habathcx', 'RobotCaleb', 'thomasballinger', 'noobs2ninjas', 'beohoff', 'MedryBW', 'brunofin', 'comster404', 'quill18'];
var firstPassPos = 1;
var secondPassPos = 1;
var logo = 'http://i.imgur.com/vPEp5RQ.png';
var streams = 'https://api.twitch.tv/kraken/streams/';
var users = 'https://api.twitch.tv/kraken/users/';
var AccInfo = {};
var data = '';

$(document).ready(function() {
  function Account(name, logo, status, url, viewers) {
    this.name = name;
    this.logo = logo;
    this.status = status;
    this.url = url;
    this.viewers = viewers;
  }

  function render() {
    for (var stream in AccInfo) {
      if (AccInfo[stream].status === undefined) {
        data = '<div>' + '<img class= \'logo\' src = "' + AccInfo[stream].logo + '">' + AccInfo[stream].name + '  <span class="glyphicon glyphicon-info-sign"></span><p class= \'stat\'>Offline</p></div>';
      } else if (AccInfo[stream].status === 'Account Closed') {
        data = '<div>' + '<img class= \'logo\' src = "' + AccInfo[stream].logo + '">' + AccInfo[stream].name + '  <span class="glyphicon glyphicon-warning-sign"></span><p class= \'stat\'>Account Closed</p></div>';

      } else {
        data = '<div>' + '<img class= \'logo\' src = "' + AccInfo[stream].logo + '">' + AccInfo[stream].name + '  <span class="glyphicon glyphicon-ok-sign"></span> <a href="' + AccInfo[stream].url + '" target="_blank"><p class= \'stat\'>' + AccInfo[stream].status + '</p></a>' + '<p class= \'stat\'> <span class="glyphicon glyphicon-eye-open"></span> ' + AccInfo[stream].viewers + '</p></div>';

      }

      $('.list').append(data);

    }
  }

  function getUserInfo(CurrentName) {
    $.getJSON(users + CurrentName + '?callback=?', function(response) {
      if (response.logo === null) {
        CurrentName = new Account(response.display_name, logo);
      } else {
        CurrentName = new Account(response.display_name, response.logo);
      };

      firstPassPos++;
      AccInfo[CurrentName.name] = CurrentName;
      if (firstPassPos === accounts.length) {
        for (var key in AccInfo) {
          getStreamInfo(AccInfo[key]);
        }
      }
    });
  }

  function getStreamInfo(currentStream) {
    $.getJSON(streams + currentStream.name + '?callback=?', function(feed) {
      secondPassPos++;
      if (feed.status === 422) {
        currentStream.status = 'Account Closed';
        if (secondPassPos === accounts.length) {
          render();
        }
      }

      if (feed.stream !== null && feed.stream !== undefined) {
        currentStream.status = feed.stream.channel.status;
        currentStream.url = feed.stream.channel.url;
        currentStream.viewers = feed.stream.viewers;
        if (secondPassPos === accounts.length) {
          render();
        }
      };
    });
  }

  accounts.forEach(getUserInfo);
});
