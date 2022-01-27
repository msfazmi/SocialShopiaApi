const cityService = require('../services/city-service');
const cityValidatioin = require('../validations/city-validation');
const ErrorHandler = require('../utils/error-handler');
const mongoose = require('mongoose');
const CityDto = require('../dtos/city-dto');

class CityController {

    createCity = async (req, res, next) => {
        const body = await cityValidatioin.createCity.validateAsync(req.body);
        const result = await cityService.createCity(body);
        return result ? next(ErrorHandler.responseSuccess('City Added')) : next(ErrorHandler.serverError('Failed To Add City'));
    }

    findCities = async (req, res, next) => {
        const { stateId } = req.params;
        if (!mongoose.isValidObjectId(stateId))
            return next(ErrorHandler.badRequest('Invalid State Id'));
        const cities = await cityService.findCities({ status: 1, stateId });
        if (!cities || cities.length < 1)
            return next(ErrorHandler.notFound('No City Found'));
        const data = cities.map((x) => new CityDto(x));
        res.json({ success: true, message: 'Cities Found', data });
    }


}

module.exports = new CityController();