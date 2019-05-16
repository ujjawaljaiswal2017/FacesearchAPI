var express = require('express'),
  app = express(),
  port = process.env.PORT || 3001,
  bodyParser = require('body-parser');

app.use(bodyParser.json());

var routes = require('./api/routes/route'); //importing route
routes(app);
app.listen(port);

console.log('FaceSearch API server started on: ' + port);