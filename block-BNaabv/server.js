var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');


var app = express();

// middlewares

app.use(logger('dev'));
app.use(cookieParser());

// custom middlewares

app.use('/admin', (req, res, next) => {
    next('Unauthorised user');
})

// routes

app.get('/', (req, res) => {
    res.send('<h2>Welcome to express</h2>');
});

app.get('/about', (req, res) => {
    res.send('My name is qwerty');
});

app.post('/form', (req, res) => {
    res.send();
});

app.post('/json', (req, res) => {
    res.send();
});

app.get('/users/:username', (req, res) => {
    var username = req.params.username;
    res.send(username);
})
  
// 404 handler

app.use((req, res, next) => {
    res.send('Page not found');
})

// custom error

app.use((err, req, res, next) => {
    res.status(500).send(err);
})

app.listen(3000, () => {
    console.log('Server is listening on port 3k');
});