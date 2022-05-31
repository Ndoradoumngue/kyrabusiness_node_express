const asyncHandler = require('express-async-handler');
const companyData = require('../models/user_model');

const user_data = asyncHandler(async(req, res) => {
	res.status(200).json({ message: 'user data list'});
});

const user_registration = asyncHandler(async(req, res) => {
	res.status(200).json({ message: 'user added with success'});
});

const user_login = asyncHandler(async(req, res) => {
	res.status(200).json({ message: 'user updated with success'});
});

const user_update = asyncHandler(async(req, res) => {
	res.status(200).json({ message: 'user deleted with success'});
});

module.exports = {
	user_data,
	user_registration,
	user_login,
	user_update,
}
