let http = require('http');
let fs = require('fs');
let express = require('express');

let dir = '../client';

let app = express();

app.use(express.static(dir));

app.get('/', function (req, res) {
    res.sendFile(dir+'index.html');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});