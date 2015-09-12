var accounts = ['freecodecamp', 'storbeck', 'terakilobyte', 'habathcx', 'RobotCaleb', 'thomasballinger', 'noobs2ninjas', 'beohoff', 'MedryBW', 'brunofin', 'comster404', 'quill18'];
var firstPassPos = 1;
var secondPassPos = 1;
var logo = 'http://i.imgur.com/vPEp5RQ.png';
var streams = 'https://api.twitch.tv/kraken/streams/';
var users = 'https://api.twitch.tv/kraken/users/';
var AccInfo = {};

$(document).ready(function() {
  function Account(name, logo, status, url, viewers, data) {
    this.name = name;
    this.logo = logo;
    this.status = status;
    this.url = url;
    this.viewers = viewers;
    this.data = data;
  }

  function render() {
    for (var stream in AccInfo) {
      if (AccInfo[stream].status === undefined) {
        AccInfo[stream].data = '<div class= "user" id="' + AccInfo[stream].name + '"><img class= \'logo\' src = "' + AccInfo[stream].logo + '">' + AccInfo[stream].name + '  <span class="glyphicon glyphicon-info-sign"></span><p class= \'stat\'>Offline</p></div>';
        $('.list3').append(AccInfo[stream].data);
      } else if (AccInfo[stream].status === 'Account Closed') {
        AccInfo[stream].data = '<div class= "user" id="' + AccInfo[stream].name + '"><img class= \'logo\' src = "' + AccInfo[stream].logo + '">' + AccInfo[stream].name + '  <span class="glyphicon glyphicon-warning-sign"></span><p class= \'stat\'>Account Closed</p></div>';

      } else {
        AccInfo[stream].data = '<div class= "user" id="' + AccInfo[stream].name + '"><img class= \'logo\' src = "' + AccInfo[stream].logo + '">' + AccInfo[stream].name + '  <span class="glyphicon glyphicon-ok-sign"></span> <a href="' + AccInfo[stream].url + '" target="_blank"><p class= \'stat\'>' + AccInfo[stream].status + '</p></a>' + '<p class= \'stat\'> <span class="glyphicon glyphicon-eye-open"></span> ' + AccInfo[stream].viewers + '</p></div>';
        $('.list2').append(AccInfo[stream].data);

      }

      $('.list').append(AccInfo[stream].data);

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

  // Search box

  $('input').keyup(function() {
    if ($('input').val().length > 0) {
      // Display matching names by hiding anythign that is not what we want from the  class= "user"
      var reg = new RegExp($('input').val(), 'ig');
      $('.user').css('display', 'none');

      for (var a in AccInfo) {
        if (reg.test(AccInfo[a].name)) {
          $('#' + AccInfo[a].name).css('display', 'block');
        }
      }

    } else if ($('input').val().length < 1) {
      // display everything again
      $('.user').css('display', 'block');
    }
  });
});
