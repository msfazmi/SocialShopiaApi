const router = require('express').Router();
const am = require('../middlewares/async-middleware');
const addressController = require('../controllers/address-controller');
const userController = require('../controllers/user-controller');
const upload = require('../services/file-upload-service');

router.post('/address', am(addressController.createAddress));
router.get('/address', am(addressController.findAddresses));
router.get('/address/:id', am(addressController.findAddress));
router.patch('/address', am(addressController.updateAddress));
router.patch('/address/default', am(addressController.makeAddressDefault));
router.delete('/address', am(addressController.deleteAddresss));

router.get('/profile', am(userController.findUser));
router.patch('/profile', upload.single('image'), am(userController.updateUser));


module.exports = router;