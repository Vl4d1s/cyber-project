var Ddos = require('.');
const opener = require('opener');
var express = require('express');
var ddos = new Ddos({
  //whitelist: ['127.0.0.1'],
  burst: 4,
  limit: 4,
  testmode: false,
});
var app = express();
app.use(ddos.express);
app.get('/', (req, res, next) => {
  res.end('A simple server made with love by Vladis & Saher');
});
app.listen(3000, () => {
  opener('http://127.0.0.1:3000');
});
