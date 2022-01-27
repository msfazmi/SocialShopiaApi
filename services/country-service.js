const ModelCountry = require('../models/country-model');

class CountryService {

    createCountry = async data => await ModelCountry.create(data);

    findCountries = async filter => await ModelCountry.find(filter);

};

module.exports = new CountryService();