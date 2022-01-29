const ProductModel = require('../models/product-model');

class ProductService {

    createProduct = async data => await ProductModel.create(data);

    findProduct = async filter => await ProductModel.findOne(filter).populate('thumbnail').populate('images').populate({ path: 'stockIds', populate: { path: 'attributeId' } }).populate('metaImage');

    findProducts = async filter => await ProductModel.find(filter).populate('thumbnail').populate('images').populate({ path: 'stockIds', populate: { path: 'attributeId' } }).populate('metaImage');

    updateProduct = async (filter, data) => await ProductModel.updateOne(filter, data);

    deleteProduct = async filter => await ProductModel.deleteOne(filter);

}

module.exports = new ProductService();