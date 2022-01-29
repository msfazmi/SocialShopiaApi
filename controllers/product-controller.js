const productService = require('../services/product-service');
const productValidation = require('../validations/product-validation');
const productStockService = require('../services/product-stock-service');
const ErrorHandler = require('../utils/error-handler');
const ProductDto = require('../dtos/product-dto');
const mongoose = require('mongoose');

class ProductControlelr {

    createProduct = async (req, res, next) => {
        let stock = [];
        const body = await productValidation.createProduct.validateAsync(req.body);
        if (!body.slug)
            body.slug = body.name.replace(/\s+/g, '-').toLowerCase();
        else
            body.slug = body.slug.replace(/\s+/g, '-').toLowerCase();

        if (body.attributeIds.length != body.attributePrices.length || body.attributeIds.length != body.attributeQuantities.length)
            return next(ErrorHandler.badRequest('Attribute Price & Quantity Is Required'));

        const product = await productService.createProduct(body);

        if (!product)
            return next(ErrorHandler.serverError('Failed To Add Product'));

        for (let i = 0; i < body.attributeIds.length; i++) {
            stock.push({
                productId: product._id,
                attributeId: body.attributeIds[i],
                price: body.attributePrices[i],
                quantity: body.attributeQuantities[i]
            });
        }
        const productStock = await productStockService.createProductStocks(stock);
        if (!productStock || productStock.length < 1) {
            await productService.deleteProduct({ _id: product._id });
            return next(ErrorHandler.serverError('Failed To Add Product'));
        }
        res.json({ success: true, message: 'Product Added' });
    }

    findProduct = async (req, res, next) => {
        const { id } = req.params;
        let filter = { _id: id };
        if (!mongoose.isValidObjectId(id))
            filter = { slug: id };
        const result = await productService.findProduct(filter);
        res.json(result);
        if (!result)
            return next(ErrorHandler.serverError('No Product Found'));
        res.json({ success: true, message: 'Products Found', data: new ProductDto(result) });
    }

    

    findProducts = async (req, res, next) => {
        const result = await productService.findProducts();
        if (!result)
            return next(ErrorHandler.serverError('No Product Found'));
        const data = result.map((x) => {
            return new ProductDto(x);
        })
        res.json({ success: true, message: 'Products Found', data });
    }

    updateProduct = async (req, res, next) => {

    }

    deleteProduct = async (req, res, next) => {

    }

}

module.exports = new ProductControlelr();