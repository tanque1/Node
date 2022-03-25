const newsRouter = require('./news');
const siteRouter = require('./site');
const productsRouter = require('./products');
const rewrite = require('express-urlrewrite');
function route(app) {
	app.use('/products',productsRouter)
	app.use(rewrite(/^\/products-(.+)/, '/products?slug=$1'),productsRouter)
	app.use('/news', newsRouter);
	// app.use('/products',productsRouter);
	app.use('/', siteRouter);
}

module.exports = route;
