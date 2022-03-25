var express = require('express');
var router = express.Router();

const productController = require('../app/controllers/ProductController');

router.use('/create',productController.create)
router.use('/store',productController.store)

router.use('/:slug',productController.show);

router.use('/',productController.home);




module.exports = router;