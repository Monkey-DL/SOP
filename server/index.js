let bodyParser = require('body-parser');
let fs = require('fs-extra');
let express = require('express');

let dir = '../client';

let urlencodedParser = bodyParser.urlencoded({
    extended: false
});

let app = express();

let childrens = fs.readJSONSync('childrens.json');
let childrensMaxID = (-1);
for (index in childrens) {
    if (childrens[index].id > childrensMaxID) {
        childrensMaxID = childrens[index].id;
    }
}


let trustees = fs.readJSONSync('trustees.json');
let trusteesMaxID = (-1);

for (index in trustees) {
    if (trustees[index].id > trusteesMaxID) {

        trusteesMaxID = trustees[index].id;
    }
}

app.use(express.static(dir));

app.get('/', function (req, res) {
    res.sendFile(dir + 'index.html');
});

app.post('/getData', function (req, res) {
    res.json([childrens, trustees]);
});

app.post('/addChildren', urlencodedParser, function (req, res) {

    childrens.push(JSON.parse(req.body.children));
    childrens[childrens.length - 1].id = childrensMaxID + 1;
    childrensMaxID += 1;
    let newTrustees = JSON.parse(req.body.newTrustees);
    childrens[childrens.length - 1].trustees = [];
    for (i in newTrustees) {
        trustees.push(newTrustees[i]);
        trustees[trustees.length - 1].id = trusteesMaxID + 1;

        childrens[childrens.length - 1].trustees.push(trusteesMaxID + 1);
        trusteesMaxID += 1;
    }

    fs.writeFileSync('childrens.json', JSON.stringify(childrens));
    fs.writeFileSync('trustees.json', JSON.stringify(trustees));
    res.json([childrens, trustees]);
});

app.post('/changeChildren', urlencodedParser, function (req, res) {
    childrensNewINfo = JSON.parse(req.body.children);
    for (let i = 0; i < childrens.length; i++) {
        if (childrens[i].id == childrensNewINfo.id) {
            childrens[i] = childrensNewINfo;
        }
    }
    fs.writeFileSync('childrens.json', JSON.stringify(childrens));
    res.json([childrens, trustees]);
});

app.post('/deleteChildren', urlencodedParser, function (req, res) {
    let deleteId = JSON.parse(req.body.deleteId);
    for (let i = 0; i < childrens.length; i++) {
        if (childrens[i].id == deleteId) {
            childrens.splice(i, 1);
        }
    }
    fs.writeFileSync('childrens.json', JSON.stringify(childrens));
    res.json([childrens, trustees]);
});

app.post('/addTrustees', urlencodedParser, function (req, res) {

    res.json([childrens, trustees]);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});