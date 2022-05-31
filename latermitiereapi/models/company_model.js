const mongoose = require('mongoose');

const companySchema = mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Veuillez entrer le nom de l\'entreprise!']
	},
	logo: {
		type: String,
		required: [true, 'Veuillez entrer le nom de l\'entreprise!']
	},
	address: {
		type: String,
		required: [true, 'Veuillez entrer le nom de l\'entreprise!']
	},
	active: {
		type: Boolean,
		default: true
	},
	is_partner: {
		type: Boolean,
		default: true
	}
}, {
	timestamps: true
})

module.exports = mongoose.model('Company', companySchema)
