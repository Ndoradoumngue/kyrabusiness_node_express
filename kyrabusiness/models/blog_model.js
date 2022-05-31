const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
	title: {
		type: String,
		required: [true, 'Veuillez entrer le titre de l\'article']
	},
	article: {
		type: String,
		required: [true, 'Veuillez entrer le titre de l\'article']
	},
	image: {
		type: String,
		required: [true, 'Veuillez entrer le titre de l\'article']
	},
	active: {
		type: Boolean,
		default: true
	},
	posted_by: {
		type: mongoose.Schema.Types.ObjectId,
		refs: 'User'
	},
}, {
	timestamps: true
})

module.exports = mongoose.model('Blog', blogSchema);