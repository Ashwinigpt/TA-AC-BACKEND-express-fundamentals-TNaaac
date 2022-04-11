var express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get('/new', (req, res) => {
    res.sendFile(__dirname + "/new.html")
})

app.post('/new', (req, res) => {
    
})

app.get('users/:asdf', (req, res) => {
    var asdf = req.params.asdf;
    res.send(asdf);
})

app.listen(5000, () => {
    console.log('Server is listening on port 5k');
})