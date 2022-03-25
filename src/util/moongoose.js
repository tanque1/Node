module.exports = {
    mutipleMongooseToObject: function (mongoose){
        return mongoose.map(mon => mon.toObject());
    },
    mongooseToObject: function (mongoose){
        return mongoose ? mongoose.toObject() : mongoose
    }
}

