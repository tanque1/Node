const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Product = new Schema(
	{
		name: {type: String, maxLength: 255, default: ''},
		description: {type: String, maxLength: 600},
		thumbnail: {type: String, maxLength: 255},
		slug: {type: String, slug: 'name', unique: true},
	},
	{
		timestamps: true,
	}
);

// add plugin
mongoose.plugin(slug);
Product.plugin(mongooseDelete, {overrideMethods: true, deletedAt: true});

module.exports = mongoose.model('Product', Product);
