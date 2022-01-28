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
const productController = require('../controllers/product-controller');
const upload = require('../services/file-upload-service');

//Countries
router.post('/country', am(countryController.createCountry));
router.get('/country/:id', am(countryController.findCountry));
router.patch('/country', am(countryController.updateCountry));
router.delete('/country', am(countryController.deleteCountry));

//States
router.post('/state', am(stateController.createState));
router.get('/state/:id', am(stateController.findState));
router.patch('/state', am(stateController.updateState));
router.delete('/state', am(stateController.deleteState));

//Cities
router.post('/city', am(cityController.createCity));
router.get('/city/:id', am(cityController.findCity));
router.patch('/city', am(cityController.updateCity));
router.delete('/city', am(cityController.deleteCity));

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

//Attributes
router.post('/attribute', am(attributeController.createAttribute));
router.get('/attributes', am(attributeController.findAttributes));
router.get('/attribute/:id', am(attributeController.findAttribute));
router.patch('/attribute', am(attributeController.updateAttribute));
router.delete('/attribute', am(attributeController.deleteAttribute));


//Products
router.post('/product', am(productController.createProduct));
router.patch('/product', am(productController.updateProduct));
router.delete('/product', am(productController.deleteProduct));


module.exports = router;