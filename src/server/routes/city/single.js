const data = require('../../../img/images2.json');

module.exports = (req, res) => {
    const cityId = req.params.cityId * 1;
    const city = data.city.find(c => c.id === cityId);

    res.status(200).json({ city });
};