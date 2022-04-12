// requires
var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');

var app = express();

// middlewares

    // form & json data
app.use(express.json());
app.use(express.urlencoded({extended: false}));

   //static assets middleware
app.use(express.static(__dirname + '/public'))

   //third party middleware
app.use(logger('dev'));
app.use(cookieParser());

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