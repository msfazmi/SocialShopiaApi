const router = require('express').Router();
const countryController = require('../controllers/country-controller');
const stateController = require('../controllers/state-controller');
const cityController = require('../controllers/city-controller');
const brandController = require('../controllers/brand-controller');
const categoryController = require('../controllers/category-controller');
const am = require('../middlewares/async-middleware');

router.get('/countries', am(countryController.findCountries));
router.get('/states/:countryId', am(stateController.findStates));
router.get('/cities/:stateId', am(cityController.findCities));
router.get('/brands', am(brandController.findBrands));
router.get('/brand/:id', am(brandController.findBrand));


router.get('/categories', am(categoryController.findCategories));
router.get('/categories/:id', am(categoryController.findCategories));
router.get('/category/:id', am(categoryController.findCategory));


module.exports = router;