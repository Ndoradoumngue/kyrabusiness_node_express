const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Veuillez entrer le titre de l\'article']
	},
	active: {
		type: Boolean,
		default: true
	},
}, {
	timestamps: true
})

module.exports = mongoose.model('Category', categorySchema);