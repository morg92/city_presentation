const images = require('../../../img/images2.json');

module.exports = (req, res) => {
    const infoId = req.params.cityId * 1;
    let cityName;
    for (let i of images.info) {
        if (i.cityId === infoId){
            cityName = i.name;
            break;
        }
    }
    res.status(200).send(cityName);
};