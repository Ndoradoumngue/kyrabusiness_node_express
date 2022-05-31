const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Veuillez entrer le titre de l\'article']
	},
	description: {
		type: String,
		required: [true, 'Veuillez entrer le titre de l\'article']
	},
	price: {
		type: String,
		required: [true, 'Veuillez entrer le titre de l\'article']
	},
	category: {
		type: mongoose.Schema.Types.ObjectId,
		refs: 'Category'
	},
	image: {
		type: String,
		required: [true, 'Veuillez entrer le titre de l\'article']
	},
	active: {
		type: Boolean,
		default: true
	},
	shop: {
		type: mongoose.Schema.Types.ObjectId,
		refs: 'Company'
	},
}, {
	timestamps: true
})

module.exports = mongoose.model('Product', productSchema);