const ProductModel = require('../models/product-model');

class ProductService {

    createProduct = async data => await ProductModel.create(data);

    findProduct = async filter => await ProductModel.findOne(filter).populate({ path: 'thumbnail images metaImage' }).populate({ path: 'stockIds', populate: { path: 'attributeId' } }).populate({ path: 'brandId', populate: { path: 'logo' } }).populate({ path: 'categoryId', populate: { path: 'icon' } });

    findProducts = async filter => await ProductModel.find(filter).populate({ path: 'thumbnail images metaImage' }).populate({ path: 'stockIds', populate: { path: 'attributeId' } }).populate({ path: 'brandId', populate: { path: 'logo' } }).populate({ path: 'categoryId', populate: { path: 'icon' } });

    updateProduct = async (filter, data) => await ProductModel.updateOne(filter, data);

    deleteProduct = async filter => await ProductModel.deleteOne(filter);

    findProductAndDelete = async filter => await ProductModel.findOneAndDelete(filter);

}

module.exports = new ProductService();