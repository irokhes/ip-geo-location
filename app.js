var express = require('express');
var app = express();
// require request-ip and register it as middleware
var requestIp = require('request-ip');

app.use(requestIp.mw())

app.get('/', function (req, res) {
  console.log(req.clientIp);
  res.send(req.clientIp);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});