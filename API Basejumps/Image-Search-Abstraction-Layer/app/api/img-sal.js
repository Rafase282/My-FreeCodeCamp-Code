'use strict';
var Search = require('bing.search');
module.exports = function(app, History) {

  app.route('/latest')
    // Retrieve most recent searches
    .get(getHistory);

  app.get('/:query', handlePost);

  function handlePost(req, res) {
    // Get images and save query and date.
    var query = req.params.query;
    var size = req.query.offset || 10;
    var search = new Search(process.env.API_KEY);
    var history = {
      "term": query,
      "when": new Date().toLocaleString()
    };
    // Save query and time to the database
    if (query !== 'favicon.ico') {
      save(history);
    }

    // Query the image and populate results
    search.images(query, {
        top: size
      },
      function(err, results) {
        if (err) throw err;
        res.send(results.map(makeList));
      }
    );
  }

  function makeList(img) {
    // Construct object from the json result
    return {
      "url": img.url,
      "snippet": img.title,
      "thumbnail": img.thumbnail.url,
      "context": img.sourceUrl
    };
  }

  function save(obj) {
    // Save object into db.
    var history = new History(obj);
    history.save(function(err, history) {
      if (err) throw err;
      console.log('Saved ' + history);
    });
  }

  function getHistory(req, res) {
    // Check to see if the site is already there
    History.find({}, null, {
      "limit": 10,
      "sort": {
        "when": -1
      }
    }, function(err, history) {
      if (err) return console.error(err);
      console.log(history);
      res.send(history.map(function(arg) {
        // Displays only the field we need to show.
        return {
          term: arg.term,
          when: arg.when
        };
      }));
    });
  }

};