var express = require('express');
var app = express();
// require request-ip and register it as middleware
var requestIp = require('request-ip');

app.use(requestIp.mw())

app.get('/', function (req, res) {
  var ip = req.clientIp;
  var geo = geoip.lookup(ip);
  res.send(geo);
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!');
});