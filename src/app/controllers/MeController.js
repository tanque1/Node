const {mutipleMongooseToObject} = require('../../util/moongoose');
const Product = require('../models/Product');
class MeControllers {
	//[GET] me/stored/products
	storedProducts(req, res, next) {
		

		Promise.all([Product.find({}).sortable(req), Product.countDocumentsDeleted()])
			.then(([products, deletedCount]) => {
				products = mutipleMongooseToObject(products);
				res.render('me/stored-Products', {products, deletedCount});
			})
			.catch(next);
	}
	//[GET] me/trash/products

	trashProducts(req, res, next) {
		Product.findDeleted({})
			.then((products) => {
				products = mutipleMongooseToObject(products);
				res.render('me/trash-Products', {products});
			})
			.catch(next);
	}
}

module.exports = new MeControllers();
