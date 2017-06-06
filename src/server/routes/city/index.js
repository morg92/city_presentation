const city = require('express').Router();
const all = require('./all');
const single = require('./single');

city.get('/', all);
city.get('/:cityId', single);

module.exports = city;