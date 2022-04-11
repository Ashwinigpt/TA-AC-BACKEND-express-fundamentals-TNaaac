var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');

var app = express();

app.use(logger('dev'));

app.use('/admin', (req, res, next) => {
    next('Unauthorized user')
  });

app.get('/', (req, res) => {
    res.send('Welcome');
})

app.get('/about', (req, res) => {
    res.send('About page');
})

app.use((req, res, next) => {
    res.send('Page not found');
})

app.use((err, req, res, next) => {
    res.send(err);
})

app.listen(4000, () => {
    console.log('Server is listening on port 4k');
})
