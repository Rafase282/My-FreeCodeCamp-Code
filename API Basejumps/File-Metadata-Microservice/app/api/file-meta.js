'use strict';
var log = require('npmlog');
var fs = require('fs');
var multer = require('multer');
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function(req, file, cb) {
    var getFileExt = function(fileName) {
      var fileExt = fileName.split(".");
      if (fileExt.length === 1 || (fileExt[0] === "" && fileExt.length === 2)) {
        return "";
      }
      return fileExt.pop();
    };
    cb(null, Date.now() + '.' + getFileExt(file.originalname));
  }
});

var multerUpload = multer({
  storage: storage
});
var uploadFile = multerUpload.single('userFile');

module.exports = function(app, File) {
  app.post('/upload', function(req, res) {
    uploadFile(req, res, function(err) {
      if (err) {
        // An error occurred when uploading 
        log.error(err);
      }
      // Everything went fine 
      var fileDetails = {
        name: req.file.originalname,
        size: req.file.size,
        date: new Date().toLocaleString(),
        file: req.file.filename
      };
      // save file to db
      var file = new File(fileDetails);
      file.save(function(err, file) {
        if (err) {
          log.error(err);
          throw err;
        }
        log.info('Saved', file);
      });
      var filePath = "./uploads/" + req.file.filename; 
      fs.unlinkSync(filePath);
      res.send(fileDetails);
    });
  });

};