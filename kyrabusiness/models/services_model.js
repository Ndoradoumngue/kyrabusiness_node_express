cont mongoose = require('mongoose');

const serviceSchema = mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Veuillez entrer le nom du service']
	},
	description: {
		type: String,
		required: [true, 'Veuillez entrer la description']
	},
	image: {
		type: String,
		required: [true, 'Veuillez entrer la description']
	},
	active: {
		type: Boolean,
		default: true
	}
}, {
	timestamps: true
})