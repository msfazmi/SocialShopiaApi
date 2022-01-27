const router = require('express').Router();
const countryController = require('../controllers/country-controller');
const stateController = require('../controllers/state-controller');
const cityController = require('../controllers/city-controller');
const userController = require('../controllers/user-controller');
const am = require('../middlewares/async-middleware');
const brandController = require('../controllers/brand-controller');
const uploadController = require('../controllers/upload-controller');
const categoryController = require('../controllers/category-controller');
const attributeController = require('../controllers/attribute-controller');
const upload = require('../services/file-upload-service');

// Addresses
router.post('/country', am(countryController.createCountry));
router.post('/state', am(stateController.createState));
router.post('/city', am(cityController.createCity));

//Users
router.get('/users', am(userController.findUsers));
router.get('/user/:id', am(userController.findUser));
router.get('/admins', am(userController.findUsers));

//Uploads
router.post('/upload', upload.array('images'), am(uploadController.createUpload));
router.get('/files', am(uploadController.findUploads));

//Brands
router.post('/brand', am(brandController.createBrand));
router.patch('/brand', am(brandController.updateBrand));
router.delete('/brand', am(brandController.deleteBrand));

//Categories
router.post('/category', am(categoryController.createCategory));
router.patch('/category', am(categoryController.updateCategory));
router.delete('/category', am(categoryController.deleteCategory));

// Attributes
router.post('/attribute', am(attributeController.createAttribute));
router.get('/attributes', am(attributeController.findAttributes));
router.get('/attribute/:id', am(attributeController.findAttribute));
router.patch('/attribute', am(attributeController.updateAttribute));
router.delete('/attribute', am(attributeController.deleteAttribute));


module.exports = router;