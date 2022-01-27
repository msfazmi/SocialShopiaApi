const attributeService = require('../services/attribute-service');
const attributeValidation = require('../validations/attribute-validation');
const AttributeDto = require('../dtos/attribute-dto');
const ErrorHandler = require('../utils/error-handler');
const mongoose = require('mongoose');

class AttributeController {

    createAttribute = async (req, res, next) => {
        const body = await attributeValidation.createAttribute.validateAsync(req.body);
        const result = await attributeService.createAttribute(body);
        if (!result)
            return next(ErrorHandler.serverError('Failed To Add Attribute'));
        res.json({ success: true, message: 'Attribute Added' });
    }

    findAttribute = async (req, res, next) => {
        const { id } = req.params;
        if (!mongoose.isValidObjectId(id))
            return next(ErrorHandler.serverError('Invalid Attribute Id'));
        const result = await attributeService.findAttribute({ _id: id });
        if (!result)
            return next(ErrorHandler.serverError('No Attribute Found'));
        res.json({ success: true, message: 'Attribute Found', data: new AttributeDto(result) });
    }

    findAttributes = async (req, res, next) => {
        const result = await attributeService.findAttributes(null);
        if (!result || result.length < 1)
            return next(ErrorHandler.serverError('No Attribute Found'));
        const data = result.map((x) => new AttributeDto(x));
        res.json({ success: true, message: 'Attribute Found', data });
    }

    updateAttribute = async (req, res, next) => {
        const body = await attributeValidation.updateAttribute.validateAsync(req.body);
        const { id: _id } = body;
        delete body.id;
        const result = await attributeService.updateAttribute({ _id }, body);
        return (!result.matchedCount) ? next(ErrorHandler.notFound('No Attribute Found')) : res.json({ success: true, message: "Attribute Updated" });
    }

    deleteAttribute = async (req, res, next) => {
        const body = await attributeValidation.deleteAttribute.validateAsync(req.body);
        const result = await attributeService.deleteAttribute({ _id: body.id });
        return (!result.deletedCount) ? next(ErrorHandler.notFound('No Attribute Found')) : res.json({ success: true, message: "Attribute Deleted" });
    }

}

module.exports = new AttributeController();