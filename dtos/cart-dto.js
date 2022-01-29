const ProductDto = require('./product-dto');

class CartDto {

    id;
    quantity;
    product;

    constructor(data) {
        this.quantity = data.quantity;
        this.id = data.id;
        this.product = new ProductDto(data.productId);
    }

}

module.exports = CartDto;