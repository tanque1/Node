var express = require('express');
var router = express.Router();

const productController = require('../app/controllers/ProductController');

router.get('/create',productController.create)
router.post('/store',productController.store)
 router.put('/:id',productController.update)

router.get('/:id/edit',productController.edit);
router.get('/:id/delete',productController.delete);
router.get('/:slug',productController.show);




module.exports = router;