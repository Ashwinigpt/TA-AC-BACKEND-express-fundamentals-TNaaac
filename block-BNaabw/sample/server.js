var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');

var app = express();

// custom middleware

app.use((req, res, next) => {
    res.cookie("username", "ashwini123");
    next();
})

// middlewares

app.get('/form', (req, res) => {
    res.json(req.body);
});

app.get('/json', (req, res) => {
    res .json(req.body);
});

// third party middlewares

app.use(logger('dev'));
app.use(cookieParser());

// static assets

app.use(express.static(__dirname + '/public'))

// routes

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/projects', (req, res) => {
    res.sendFile(__dirname + '/projects.html');
});

// 404 handler

app.use((req, res, next) => {
    res.send('Page not found');
})

// custom error

app.use((err, req, res, next) => {
    res.status(500).send(err);
})

// server

app.listen(4000, () => {
    console.log('Server is listening on port 4k');
});