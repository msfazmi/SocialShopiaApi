const ModelCity = require('../models/city-model');

class CityService {

    createCity = async data => await ModelCity.create(data);

    findCities = async filter => await ModelCity.find(filter);

};

module.exports = new CityService();