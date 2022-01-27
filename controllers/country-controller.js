const countryService = require('../services/country-service');
const countryValidation = require('../validations/country-validation');
const ErrorHandler = require('../utils/error-handler');
const CountryDto = require('../dtos/country-dto');

class CountryController {

    createCountry = async (req, res, next) => {
        const body = await countryValidation.createCountry.validateAsync(req.body);
        const result = await countrysService.createCountry(body);
        return result ? next(ErrorHandler.responseSuccess('Country Added')) : next(ErrorHandler.serverError('Failed To Add Country'));
    }

    findCountries = async (req, res, next) => {
        const countries = await countryService.findCountries({ status: 1 });
        if (!countries)
            return next(ErrorHandler.responseSuccess('No Country Found'));
        const data = countries.map((x) => new CountryDto(x));
        res.json({ success: true, message: 'Countries Found', data })
    }

}

module.exports = new CountryController();