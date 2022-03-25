
const Product = require('../models/Product')
const {mongooseToObject,mutipleMongooseToObject} = require('../../util/moongoose');
class ProductsControllers {


    //[GET] /
     show(req,res,next){
         console.log(req.query.slug)
        Product.findOne({ slug: req.query.slug} )
            .then(products => {
                products = mongooseToObject(products);
                res.render('products/show',{products})
            })
            .catch(next);
    }
    create(req,res,next){
       res.render("products/create")
    }
    store(req,res,next){
        // res.send("products/create")
        const products = new Product(req.body);
        products.save()
            .then(() => res.redirect('/products'))
            .catch(() => {})
     }
     home(req,res,next){
        Product.find({})
        .then(products => {
            products = mutipleMongooseToObject(products);
            res.render('home',{products})
        })
        .catch(next);
     }
     
   
  
  

}


module.exports = new ProductsControllers