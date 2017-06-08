const city = require('express').Router();
const all = require('./all');
const single = require('./single');
const info = require('./infoCity');
const infoImg = require('./infoImg');

city.get('/', all);
city.get('/:cityId', single);
city.get('/:cityId/img/', info);
city.get('/:cityId/infoImg/', infoImg);

module.exports = city;