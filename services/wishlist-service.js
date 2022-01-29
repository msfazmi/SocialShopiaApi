const WishlistModel = require('../models/Wishlist-model');

class WishlistService {

    createWishlist = async data => await WishlistModel.create(data);

    findWishlists = async filter => await WishlistModel.find(filter).populate({ path: 'productId', populate: { path: 'categoryId brandId thumbnail images stockIds metaImage' } });

    deleteWishlist = async filter => await WishlistModel.deleteOne(filter);

}

module.exports = new WishlistService();