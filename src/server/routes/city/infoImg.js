const images = require('../../../img/images2.json');

module.exports = (req, res) => {
    const infoId = req.params.cityId * 1;
    let infoImg;
    for (let i of images.info) {
        if (i.cityId === infoId){
            infoImg = i.infoImg;
            break;
        }
    }
    res.status(200).send(infoImg);
};