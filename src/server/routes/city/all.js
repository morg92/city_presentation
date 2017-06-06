const images = require('../../../img/images2.json');

module.exports = (req, res) => {
    const city = images.city;

    res.status(200).json({ city });
};