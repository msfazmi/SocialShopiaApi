const orderService = require('../services/order-service');
const ErrorHandler = require('../utils/error-handler');
const Constants = require('../utils/constants');
const orderValidation = require('../validations/order-validation');

class OrderController {


    createOrder = async (req, res, next) => {
        const body = await orderValidation.createOrder.validateAsync(req.body);
        const result = await orderService.createOrder(body);
        if (!result)
            return next(ErrorHandler.serverError(Constants.MESSAGE_ORDER_ADD_FAILED));
        res.json({ success: true, message: Constants.MESSAGE_ORDER_ADDED });
    }

    // findOrders = async (req, res, next) => {
    //     const result = await orderService.findOrders(null);
    //     if (!result || result.length < 1)
    //         return next(ErrorHandler.serverError(Constants.MESSAGE_ORDER_NOT_FOUND));
    //     const data = result.map((x) => new OrderDto(x));
    //     res.json({ success: true, message: Constants.MESSAGE_ORDER_FOUND, data });
    // }

    // findOrder = async (req, res, next) => {
    //     const { id } = req.params;
    //     if (!mongoose.isValidObjectId(id))
    //         return next(ErrorHandler.serverError(Constants.MESSAGE_ORDER_ID_INVALID));
    //     const result = await orderService.findOrder({ _id: id });
    //     if (!result)
    //         return next(ErrorHandler.serverError(Constants.MESSAGE_ORDER_NOT_FOUND));
    //     res.json({ success: true, message: Constants.MESSAGE_ORDER_FOUND, data: new OrderDto(result) });
    // }

    // updateOrder = async (req, res, next) => {
    //     const body = await orderValidation.updateOrder.validateAsync(req.body);
    //     const { id: _id } = body;
    //     delete body.id;
    //     const result = await orderService.updateOrder({ _id }, body);
    //     return (!result.matchedCount) ? next(ErrorHandler.notFound(Constants.MESSAGE_ORDER_NOT_FOUND)) : res.json({ success: true, message: Constants.MESSAGE_ORDER_UPDATE });
    // }

    // deleteOrder = async (req, res, next) => {
    //     const body = await orderValidation.deleteOrder.validateAsync(req.body);
    //     const result = await orderService.deleteOrder({ _id: body.id });
    //     return (!result.deletedCount) ? next(ErrorHandler.notFound(Constants.MESSAGE_ORDER_NOT_FOUND)) : res.json({ success: true, message: Constants.MESSAGE_ORDER_DELETED });
    // }

}

module.exports = new OrderController();