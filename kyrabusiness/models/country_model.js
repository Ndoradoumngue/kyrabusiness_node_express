const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
	country_name: {
		type: String,
		required: [true, 'Veuillez entrer le nom de l\'entreprise!']
	},
	country_code: {
		type: String,
		required: [true, 'Veuillez entrer le nom de l\'entreprise!']
	},
	country_language: {
		type: String,
		required: [true, 'Veuillez entrer le nom de l\'entreprise!']
	},
	country_flag: {
		type: String,
		required: [true, 'Veuillez entrer le nom de l\'entreprise!']
	},
	country_currency: {
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

module.exports = mongoose.model('Country', userSchema)
