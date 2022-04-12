var express = require('express');

var app = express();

app.use('/', (req, res, next) => {
    console.log(req.method, req.url, new Date());
    next();
})

app.use(express.json());

app.use(express.static());