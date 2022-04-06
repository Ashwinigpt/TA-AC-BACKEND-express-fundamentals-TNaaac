var express = require ('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');

var app = express();

app.use(logger('dev'));

app.use(cookieParser());

app.use(express.json());

app.use(express.urlencoded({extened: false}));

app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
    res.cookie("username", "Ashwini123");
    next();
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + "/about.html");
});

app.listen(4000, () => {
    console.log('Server is listening on port 4k');
})