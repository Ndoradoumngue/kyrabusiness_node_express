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
	country: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Country',
		required: [true, 'Veuillez entrer le nom du pays!']
	},
	town: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Town',
		required: [true, 'Veuillez entrer le nom de la ville!']
	},
	address: {
		type: String,
		required: [true, 'Veuillez entrer l\'addresse!']
	},
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
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
