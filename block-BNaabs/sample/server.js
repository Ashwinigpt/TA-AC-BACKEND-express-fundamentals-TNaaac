var express = require('express');
// var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

// Middleware

app.use(express.json());
app.use(express.urlencoded({extened: false}));
app.use(express.static(__dirname + '/public'));


app.use(logger('dev'));

// Routes

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get('/new', (req, res) => {
    res.sendFile(__dirname + "/new.html")
})

app.post('/new', (req, res) => {
    res.json(req.body);
})

app.get('/users/:username', (req, res) => {
    var username = req.params.username;
    res.send(username);
})

app.listen(5000, () => {
    console.log('Server is listening on port 5k');
})