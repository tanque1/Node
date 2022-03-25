
const Product = require('../models/Product')
const {mutipleMongooseToObject} = require('../../util/moongoose');
class SiteControllers {


    //[GET] /
     index(req,res,next){
 
        Product.find({})
            .then(products => {
                products = mutipleMongooseToObject(products);
                res.render('home',{products})
            })
            .catch(next);
        // res.render("home")
    }
    // [GET] /search
    search(req,res) {
        res.render("search")
    }

}


module.exports = new SiteControllers