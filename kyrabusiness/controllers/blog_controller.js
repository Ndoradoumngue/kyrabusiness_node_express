const asyncHandler = require('express-async-handler');
const companyData = require('../models/company_model');

/*List companies */

const get_company = asyncHandler(async(req, res) => {

	const companies_list = await companyData.find();
	res.status(200).json(companies_list);
});


/*Add a new company*/

const add_company = asyncHandler(async(req, res) => {

	if (!req.body.name) { res.status(400); throw new Error('Veuillez entrer le nom de l\'entreprise.'); }
	if (!req.body.logo) { res.status(400); throw new Error('Veuillez telecharger le logo de l\'entreprise.'); }
	if (!req.body.address) { res.status(400); throw new Error('Veuillez entrer l\'addresse de l\'entreprise.'); }

	const added_companies = await companyData.create({
		name: req.body.name,
		logo: req.body.logo,
		address: req.body.address,
	});

	res.status(200).json(added_companies);
});


/*Update a company*/

const update_company = asyncHandler(async(req, res) => {

	const company_data = await companyData.findById(req.params.id);	

	if (!company_data) {
		res.status(400);
		throw new Error('Desole, nous n\'arrivons pas a trouver l\'entreprise que vous cherchez.');
	}

	const updated_company_data = await companyData.findByIdAndUpdate(req.params.id, req.body, { new: true, });

	res.status(200).json(updated_company_data);
});


/*Delete a company*/

const delete_company = asyncHandler(async(req, res) => {
	res.status(200).json({ message: 'featured experts', message2: 'My features two'});
});


/*Export the model*/

module.exports = {
	get_company,
	add_company,
	update_company,
	delete_company,
}
