const stateService = require('../services/state-service');
const stateValidation = require('../validations/state-validation');
const ErrorHandler = require('../utils/error-handler');
const mongoose = require('mongoose');
const StateDto = require('../dtos/state-dto');

class StateController {

    createState = async (req, res, next) => {
        const body = await stateValidation.createState.validateAsync(req.body);
        const result = await stateService.createState(body);
        return result ? next(ErrorHandler.responseSuccess('State Added')) : next(ErrorHandler.serverError('Failed To Add State'));
    }

    findStates = async (req, res, next) => {
        const { countryId } = req.params;
        if (!mongoose.isValidObjectId(countryId))
            return next(ErrorHandler.badRequest('Invalid Country Id'));
        const states = await stateService.findStates({ status: 1, countryId });
        if (!states || states.length < 1)
            return next(ErrorHandler.notFound('No States Found'));
        const data = states.map((x) => new StateDto(x));
        res.json({ success: true, message: 'States Found', data });
    }

}

module.exports = new StateController();