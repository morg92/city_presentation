const images = require('../../../img/images2.json');

//Prende gli oggetti del json e li manda a server/routes//city/index

module.exports = (req, res) => {
    const city = images.city;
    const info = images.info;
    res.status(200).json({ city, info });
};
