var express = require('express');
var router = express.Router();

const newController = require('../app/controllers/NewsControllers');

router.use('/',newController.index);



module.exports = router