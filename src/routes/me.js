var express = require('express');
var router = express.Router();

const meController = require('../app/controllers/MeController');

router.get('/trash/products',meController.trashProducts);
router.get('/stored/products',meController.storedProducts);



module.exports = router