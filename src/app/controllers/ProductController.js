
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
     edit(req,res,next){
         console.log(req.params.id)
         Product.findById(req.params.id)
         .then(products => {
             products = mongooseToObject(products);
             res.render("products/edit",{products})

         })
         .catch(next);
     }
     // [DELETE] /products/id/delete
     delete(req,res,next){
        Product.delete({_id:req.params.id})
        .then(products => {
            res.redirect('back')
        })
        .catch(next)
     }
     
     update(req,res,next){
        Product.updateOne({_id:req.params.id},req.body)
        .then(ress => {
            res.redirect('/products')
        })
        .catch(ress =>{
            res.send(ress.matchedCount)
        })
         
     }
     // [PATCH] /prouducts/:id/restore
     restore(req,res,next){
        Product.restore({_id:req.params.id})
        .then(ress => {
            res.redirect('back')
        })
        .catch(next)
     }
     // [DELETE] /products/:id/restore
     forceDelete(req,res,next){
        Product.deleteOne({_id:req.params.id})
        .then(ress => {
            res.redirect('back')
        })
        .catch(next)
     }
     // [POST] /products/handle-form-actions
     handleFormActions(req,res,next) {
            switch(req.body.action){
                case 'delete':
                    Product.delete({_id:{$in:req.body.productsIds}})
                    .then(products => {
                    res.redirect('back')
                    })
                    .catch(next)
                    break;
                case 'restore':
                    Product.restore({_id:{$in:req.body.productsIds}})
                    .then(ress => {
                        res.redirect('back')
                    })
                    .catch(next)
                    break;
                default:
                    res.json({action:"Action is invalid!"})
            }

     }

}


module.exports = new ProductsControllers