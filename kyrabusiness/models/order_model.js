const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({

	client: {
		type: mongoose.Schema.Types.ObjectId,
		refs: 'User',
	},
	processed: {
		type: Boolean,
		default: false
	},
	processed_by: {
		type: mongoose.Schema.Types.ObjectId,
		refs: 'User',
	},
	processed_on: {
		type: DateTime,
		refs: 'User',
	},
	delivered: {
		type: Boolean,
		default: false,
	},
	delivered_by: {
		type: mongoose.Schema.Types.ObjectId,
		refs: 'User',
	}

}, 
{
	timestamps: true
});

module.exports = mongoose.model('Order', orderSchema);