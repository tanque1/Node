var express = require('express');
var router = express.Router();

const productController = require('../app/controllers/ProductController');

router.get('/create',productController.create)
router.post('/store',productController.store)
router.put('/:id',productController.update)

router.get('/:slug',productController.show);
router.get('/:id/edit',productController.edit);
router.delete('/:id/delete',productController.delete);
router.get('/',productController.home)




module.exports = router;