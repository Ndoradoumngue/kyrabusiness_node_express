const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
	first_name: {
		type: String,
		required: [true, 'Veuillez entrer le nom de l\'entreprise!']
	},
	last_name: {
		type: String,
		required: [true, 'Veuillez entrer le nom de l\'entreprise!']
	},
	email: {
		type: String,
		required: [true, 'Veuillez entrer le nom de l\'entreprise!']
	},
	tel: {
		type: String,
		required: [true, 'Veuillez entrer le nom de l\'entreprise!']
	},
	active: {
		type: Boolean,
		default: true
	}
}, {
	timestamps: true
})

module.exports = mongoose.model('User', userSchema)
