const mongoose = require('mongoose');

async function connect() {
	try {
		await mongoose.connect('mongodb://127.0.0.1:27017/TQ_Shop_dev');
        console.log('connect successfully') 
	} catch (err) {
        console.log("fail")
    }
}

module.exports = {connect};
