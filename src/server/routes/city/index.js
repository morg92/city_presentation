const city = require('express').Router();
const all = require('./all');
const single = require('./single');
const info = require('./infoCity');
const infoImg = require('./infoImg');
const cityName = require('./cityName');

city.get('/', all);
city.get('/:cityId', single);
city.get('/:cityId/img/', info);
city.get('/:cityId/infoImg/', infoImg);
city.get('/:cityId/name', cityName);

module.exports = city;