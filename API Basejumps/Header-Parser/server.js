'use strict';

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var routes = require('./app/routes/index.js');
    
var port = process.env.PORT || 8080;        // set our port
    
// The format follows as, alias to use for real path, also allows permission to such path.
//app.use('/api', express.static(process.cwd() + '/app/api'));
    
routes(app);

app.listen(port, function() {
    console.log('Node.js listening on port ' + port);
});