const express = require('express');
const app = express();

const fs = require('fs');

var routes = require('./routes');
app.use('/', routes);

app.get('/src/img/images2.json', function (req, res) {
    console.log('ho fatto la chiamata');
    fs.readFile('C:/Users/Administrator/Documents/project/presentation_city/src/img/images2.json', 'utf8', function (err, data) {
        let obj = JSON.parse(data);
        let objStr = JSON.stringify(obj);
        res.json(objStr);
    });
});

app.listen(4000, () => {
    console.log('App listening on port 4000');
});

//-------------------------------------------------------------------------------------------------------------------------------
/*
const data = require('/src/img/images.json');
function(req, res) {
    let city = [];
    for (let key in data) {
         city.push({
                key: key,
                name: data[key].name,
                descrizione: data[key].descrizione,
                anno_fondazione: data[key].anno_fondazione
            });
    }
}
*/