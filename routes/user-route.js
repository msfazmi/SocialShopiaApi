const router = require('express').Router();
const am = require('../middlewares/async-middleware');
const addressController = require('../controllers/address-controller');
const userController = require('../controllers/user-controller');
const upload = require('../services/file-upload-service');
const wishlistController = require('../controllers/wishlist-controller');
const cartController = require('../controllers/cart-controller');

//Adddresses
router.post('/address', am(addressController.createAddress));
router.get('/address', am(addressController.findAddresses));
router.get('/address/:id', am(addressController.findAddress));
router.patch('/address', am(addressController.updateAddress));
router.patch('/address/default', am(addressController.makeAddressDefault));
router.delete('/address', am(addressController.deleteAddresss));

//Profile
router.get('/profile', am(userController.findUser));
router.patch('/profile', upload.single('image'), am(userController.updateUser));

//Wishlists
router.post('/wishlist', am(wishlistController.createWishlist));
router.get('/wishlists', am(wishlistController.findWishlists));
router.delete('/wishlist', am(wishlistController.deleteWishlist));

//Carts
router.post('/cart', am(cartController.createCart));
router.get('/carts', am(cartController.findCarts));
router.get('/cart/:id', am(cartController.findCart));
router.patch('/cart', am(cartController.updateCarts));
router.delete('/cart', am(cartController.deleteCart));


module.exports = router;