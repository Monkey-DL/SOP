let bodyParser = require('body-parser');
let fs = require('fs-extra');
let express = require('express');

let dir = '../client';

let urlencodedParser = bodyParser.urlencoded({
    extended: false
});

let app = express();

let childrens = fs.readJSONSync('childrens.json');
let trustees=[];
// let trustees=fs.readJSONSync('trustees.json');

app.use(express.static(dir));

app.get('/', function (req, res) {
    res.sendFile(dir + 'index.html');
});

app.post('/getChildrens', function (req, res) {
    res.json(childrens);
});



app.post('/addChildren', urlencodedParser, function (req, res) {
    childrens.push(JSON.parse(req.body.children));
    fs.writeFileSync('childrens.json', JSON.stringify(childrens));
    res.json();
});

app.post('/changeChildren', urlencodedParser, function (req, res) {
    childrensNewINfo = JSON.parse(req.body.children);
    for (let i = 0; i < childrens.length; i++) {
        if (childrens[i].id == childrensNewINfo.id) {
            childrens[i] = childrensNewINfo;
        }
    }
    fs.writeFileSync('childrens.json', JSON.stringify(childrens));
    res.json();
});

app.post('/deleteChildren', urlencodedParser, function (req, res) {
    let deleteId = JSON.parse(req.body.deleteId);
    for (let i = 0; i < childrens.length; i++) {
        if (childrens[i].id == deleteId) {
            childrens.splice(i, 1);
        }
    }
    fs.writeFileSync('childrens.json', JSON.stringify(childrens));
    res.json();
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});