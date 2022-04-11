var express = require('express');
var logger = require('morgan');

var app = express();

// Middleware

app.use(logger('dev'));

// Custom middleware

app.use('/admin', (req, res, next) => {
    next('Unauthorized user')
  });

// Routes

app.get('/', (req, res) => {
    res.send('Welcome');
})

app.get('/about', (req, res) => {
    res.send('About page');
})

// 404 handler

app.use((req, res, next) => {
    res.send('Page not found');
})

// Custom error

app.use((err, req, res, next) => {
    res.send(err);
})

app.listen(4000, () => {
    console.log('Server is listening on port 4k');
})
