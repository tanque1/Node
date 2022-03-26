const newsRouter = require('./news');
const siteRouter = require('./site');
const productsRouter = require('./products');
const meRouter = require('./me');
const rewrite = require('express-urlrewrite');
function route(app) {
	app.use('/products',productsRouter)
	app.use('/news', newsRouter);
	app.use('/me',meRouter)
	app.use('/products',productsRouter);
	app.use(rewrite(/^\/products-(.+)/, '/products?slug=$1'),productsRouter)
	app.use('/', siteRouter);
}

module.exports = route;
