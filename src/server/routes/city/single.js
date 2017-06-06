const images = require('../../../img/images2.json');

module.exports = (req, res) => {
    const cityId = req.params.cityId * 1;  //coerces our modelId from a string into an integer
    const city = images.city.find(c => c.id === cityId);

    res.status(200).json({ city });
};