const images = require('../../../img/images2.json');

module.exports = (req, res) => {
    const infoId = req.params.cityId * 1;
    let info;
    for (let i of images.info) {
        if (i.cityId === infoId){
            info = i.img;
            break;
        }
    }
    res.status(200).send(info);
};