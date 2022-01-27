const AddressDto = require('../dtos/address-dto');
const addressService = require('../services/address-service');
const ErrorHandler = require('../utils/error-handler');
const addressValidation = require('../validations/address-validation');

class AddressController {

    createAddress = async (req, res, next) => {
        const body = await addressValidation.createAddress.validateAsync(req.body);
        body.userId = req.user.id;
        const address = await addressService.createAddress(body);
        if (!address)
            return next(ErrorHandler.serverError('Failed To Store Address'));
        res.json({ success: true, message: 'Address Added Successfully' });
    }

    findAddresses = async (req, res, next) => {
        const address = await addressService.findAddresses({ userId: req.user.id });
        if (!address || address.length < 1)
            return next(ErrorHandler.serverError('No Address Found'));
        const data = address.map((x) => new AddressDto(x));
        res.json({ success: true, message: 'Address Found', data });
    }

    findAddress = async (req, res, next) => {
        const { id } = req.params;
        console.log(id);
        const address = await addressService.findAddress({ _id: id, userId: req.user.id });
        if (!address)
            return next(ErrorHandler.serverError('No Address Found'));
        console.log(address);
        res.json({ success: true, message: 'Address Found', data: new AddressDto(address) });
    }

    updateAddress = async (req, res, next) => {
        const body = await addressValidation.updateAddress.validateAsync(req.body);
        const filter = { _id: body.id, userId: req.user.id };
        delete body.id;
        const address = await addressService.findAddressAndUpdate(filter, body);
        return (address) ? res.json({ success: true, message: 'Address Updated' }) : next(ErrorHandler.serverError('No Address Found'));
    }

    deleteAddresss = async (req, res, next) => {
        const body = await addressValidation.deleteAddress.validateAsync(req.body);
        const address = await addressService.deleteAddress({ userId: req.user.id, _id: body.id });
        return (address.deletedCount) ? res.json({ success: true, message: 'Address Deleted' }) : next(ErrorHandler.serverError('No Address Found'));
    }

    makeAddressDefault = async (req, res, next) => {
        const body = await addressValidation.makeAddressDefault.validateAsync(req.body);
        await addressService.updateAllAddress({ userId: req.user.id }, { default: false });
        await addressService.findAddressAndUpdate({ _id: body.id }, { default: true });
        return res.json({ success: true, message: 'Address Updated' });
    }

}

module.exports = new AddressController();