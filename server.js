var express = require('express');
var path = require('path');
var app = express();
var server = require('http').Server(app);

var port = 8000;

app.use(express.static(path.join(__dirname, "public")));

server.listen(port, function() {
  console.log("Listening on port " + port);
});