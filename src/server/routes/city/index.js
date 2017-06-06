const city = require('express').Router();
const all = require('./all');
const single = require('./single');
const info = require('./infoCity');

city.get('/', all);
city.get('/:cityId', single);
city.get('/:cityId/img/', info);

module.exports = city;