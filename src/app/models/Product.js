const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;

const Product = new Schema(
	{
		_id: {type:Number},
		name: {type: String, maxLength: 255, default: ''},
		description: {type: String, maxLength: 600},
		thumbnail: {type: String, maxLength: 255},
		slug: {type: String, slug: 'name', unique: true},
	},
	{
		timestamps: true,
		_id:false,
	}
);

// Custom helpers query

Product.query.sortable = function(req) {
	if(req.query.hasOwnProperty('_sort')){
		const isValidtype = ['asc', 'desc'].includes(req.query.type);
		return this.sort({
			[req.query.column]: isValidtype ? req.query.type : 'asc'
		})
	}
	return this
}

// add plugin
mongoose.plugin(slug);
Product.plugin(AutoIncrement)
Product.plugin(mongooseDelete, {overrideMethods: true, deletedAt: true});

module.exports = mongoose.model('Product', Product);
