var app = require('express')();

app.use(function(req, res, next) {
  console.log("GET " + req.path + " with cookies " + req.get('Cookie'));
  next();
});

app.get('/', function(req, res) {
  res.status(200).sendFile("index.html", { root: '.', headers: {
    "Cache-Control": "no-cache",
    "Content-Type": "text/html; charset=utf-8",
    "Set-Cookie": "foo=bar"
  }});
});

app.get('/check-cookie.pdf', function(req, res) {
  var filename;
  if (/foo=bar/.test(req.get('Cookie') || '')) {
    filename = 'cookie-yes.pdf';
  } else {
    filename = 'cookie-no.pdf';
  }
  res.status(200).sendFile(filename, { root: '.', headers: {
    "Content-Type": "application/pdf"
  }});
});

app.listen(46593);
console.log("Browse to http://localhost:46593 to begin your testing");
