const router = require('express').Router();
const countryController = require('../controllers/country-controller');
const stateController = require('../controllers/state-controller');
const cityController = require('../controllers/city-controller');
const brandController = require('../controllers/brand-controller');
const categoryController = require('../controllers/category-controller');
const productController = require('../controllers/product-controller');
const am = require('../middlewares/async-middleware');

//Countries
router.get('/countries', am(countryController.findCountries));

//States
router.get('/states/:countryId', am(stateController.findStates));

//Cities
router.get('/cities/:stateId', am(cityController.findCities));

//Brands
router.get('/brands', am(brandController.findBrands));
router.get('/brand/:id', am(brandController.findBrand));

//Categories
router.get('/categories', am(categoryController.findCategories));
router.get('/categories/:id', am(categoryController.findCategories));
router.get('/category/:id', am(categoryController.findCategory));

//Products
router.get('/products', am(productController.findProducts));
router.get('/product/:id', am(productController.findProduct));



module.exports = router;