const res = require("express/lib/response")

class NewsControllers {


    //[GET] /news/slug
    show(req,res){
        res.send("new Detail")
    }
    // [GET] /news
    index(req,res) {
        res.render('news')
    }

}


module.exports = new NewsControllers