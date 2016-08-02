
var express = require('express'),
  requestProxy = require('express-request-proxy'),
  port = process.env.PORT || 4000,
  app = express();

var proxyEve = function(request, response) {
  console.log('Routing EVE request for ', request.params[0]);
  (
		requestProxy({
  url: 'http://api.eve-central.com/' + request.params[0],
		})
	)(request, response);
};

app.get('/eve-central/*', proxyEve);

app.use(express.static('./public'));

app.get('*', function(request, response) {
  console.log('New request: ', request.url);
  response.sendFile('index.html', {root: './public'});
});

app.listen(port, function() {
  console.log('Server started on port ' + port + '!');
});
