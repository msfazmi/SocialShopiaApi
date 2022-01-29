const ProductModel = require('../models/product-model');

class ProductService {

    createProduct = async data => await ProductModel.create(data);

    // findProduct = async filter => await ProductModel.findOne(filter).populate('thumbnail').populate('images').populate('attributeIds').populate('metaImage');

    findProducts = async filter => await ProductModel.find(filter).populate('thumbnail').populate('images').populate('attributeIds').populate('metaImage');

    findProduct = async filter => await ProductModel.aggregate([
        { $match: filter },
        {
            $lookup:
            {
                from: "product-stocks",
                localField: "_id",
                foreignField: "productId",
                as: "choiceOption"
            },
            $lookup:
            {
                from: "uploads",
                localField: "images",
                foreignField: "_id",
                as: "images"
            },
        }
    ])

    updateProduct = async (filter, data) => await ProductModel.updateOne(filter, data);

    deleteProduct = async filter => await ProductModel.deleteOne(filter);

}

module.exports = new ProductService();