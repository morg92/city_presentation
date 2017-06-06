const routes = require('express').Router();
const city = require('./city');

routes.use('/city', city);

routes.get('/', function(req, res) {
    res.status(200).json({ message: 'Connected'});
});

module.exports = routes;