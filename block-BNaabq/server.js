var express = require ('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

app.use(express.json());
app.use(express.urlencoded({extened: false}));
app.use(express.static(__dirname + '/public'));

app.use(cookieParser());

app.use(logger('dev'));

app.use((req, res, next) => {
    console.log(req.cookie);
    next();
})

app.use('/about', (req, res, next) => {
    res.cookie("username", "Ashwini123");
    res.end("About page");
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(4000, () => {
    console.log('Server is listening on port 4k');
})