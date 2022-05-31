const mongoose = require('mongoose');

const townSchema = mongoose.Schema({
	country: {
		type: mongoose.Schema.Types.ObjectId,
		refs: 'Country',
		required: [true, 'Veuillez entrer le nom de ville']
	},
	town_name: {
		type: String,
		required: [true, 'Veuillez entrer le nom de ville']
	},
	town_code: {
		type: String,
		required: [true, 'Veuillez entrer le code de la ville']
	}
},
{
	timestamps: true
})

module.exports = mongoose.model('Town', userSchema);