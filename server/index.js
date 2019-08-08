let bodyParser=require('body-parser');
let fs = require('fs');
let express = require('express');

let dir = '../client';

let urlencodedParser = bodyParser.urlencoded({extended: false});
let fileStream=fs.

let app = express();

let childrens;

app.use(express.static(dir));

app.get('/', function (req, res) {
    
    res.sendFile(dir + 'index.html');
});

app.post('/addChildren',urlencodedParser, function (req, res) {
    console.log(req.body.children);
    childrens=JSON.parse(req.body.children);
    
    res.send();
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});