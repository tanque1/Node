var express = require('express');
var router = express.Router();

const meController = require('../app/controllers/MeController');

router.use('/',meController.storedProducts);



module.exports = router