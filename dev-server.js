var express = require('express');
var request = require('request');
var cors = require('cors');
var RewriteMiddleware = require('express-htaccess-middleware');
var winston = require('winston'),
  expressWinston = require('express-winston');
var path = require('path');
var compression = require('compression');

var RewriteOptions = {
  file: './dist/.htaccess'
};

const apiServerHost = 'http://localhost:50000';

var app = express();
app.use(cors());
app.use(compression())
app.use(expressWinston.logger({
  transports: [
    new winston.transports.Console({
      json: true,
      colorize: true
    })
  ]
}));

app.use(express.static('dist'));

app.use('/api', function(req, res) {
  var url = apiServerHost + req.url;
  console.log(url);
  req.pipe(request(url)).pipe(res);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(4201);
console.log( " Dev server started at http://localhost:4201 ");

