var express = require('express');

var app = express();

// morgan

app.use((req, res, next) => {
    let time = new Date()
    console.log(req.method, req.url, time);
    next();
})

// express.json

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(JSON.parse(req.body))
})

// express.static

var staticCustom = (res, req, next) => {
    if (req.url.split('.').pop() === 'css') {
      res.send(__dirname + 'filename');
    }
  };
  app.use(staticCustom);
  

app.listen(3000, () => {
    console.log('Server is listening on port 3k');
})