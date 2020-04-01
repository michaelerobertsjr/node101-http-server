const http = require('http');

const server = http.createServer(function(req, res) {
  console.log('Received' + req.method + 'request for:' + req.url);
  res.writeHead(200, {'Content-type': 'text/plain'});
  res.end('Hello World');
});
server.listen(8080, 'localhost', null, function() {
  console.log('Server is listening in port: 8080');
});

ERROR im getting
hello-express
    1) "before each" hook for "should have the correct page title"


  0 passing (3ms)
  1 failing

  1) hello-express "before each" hook for "should have the correct page title":
     ReferenceError: Nightmare is not defined
      at Context.<anonymous> (test\main.spec.js:13:5)
      at processImmediate (internal/timers.js:439:21)


