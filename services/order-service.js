const OrderModel = require('../models/order-model');

class OrderService {

    createOrder = async data => await ModelOrder.create(data);

    findOrder = async filter => await ModelOrder.findOne(filter);

    findOrderss = async filter => await ModelOrder.find(filter);

    updateOrder = async (filter, data) => await ModelOrder.updateOne(filter, data);

    // deleteOrder = async filter => await ModelOrder.deleteOne(filter);

}

module.exports = new OrderService();