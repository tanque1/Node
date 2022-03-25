
const {mutipleMongooseToObject} = require('../../util/moongoose');
const Product = require('../models/Product')
class MeControllers {


    //[GET] /news/slug
    storedProducts(req,res,next){
        Product.find({})
        .then(products => {
            products = mutipleMongooseToObject(products);
            res.render("me/stored-Products",{products})
        })
        .catch(next);
    }

}


module.exports = new MeControllers