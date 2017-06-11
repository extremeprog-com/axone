(function () {
  'use strict';

  var port = process.env.PORT || '80';
  var express = require('express');

  var app = express();

  app.engine('html', require('ejs').__express);
  app.set('views', __dirname + '/../');
  app.set('view engine', 'ejs');

  app.use('/', express.static(__dirname + '/../'));
  app.get('/', function (req, res) {
    res.render('landing.html');
  });

  app.get('/axone', function (req, res) {
    res.render('axone.html');
  });

  app.get('/contacts', function (req, res) {
    res.render('contacts.html');
  });

  app.get('/end', function (req, res) {
    res.render('end.html');
  });

  app.listen(port, function () {
    console.log('Server listening on port ' + port + '!');
  });

})();
