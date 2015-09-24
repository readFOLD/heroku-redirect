var express = require('express');

var app = express();

var statusCode  = parseInt(process.env.STATUS_CODE) || 301;

app.get('*', function(request, response) {
  response.redirect(statusCode, process.env.NEW_BASE_URL + (request.url || ''))
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
