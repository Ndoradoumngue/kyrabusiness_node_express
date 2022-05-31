const express = require('express');
const router = express.Router();

const { companies_list, company_details, add_company, update_company, delete_company } = require('../controllers/company_controller');

router.route('/').get(companies_list).post(add_company);
router.route('/:id').put(update_company).get(company_details);
router.put('/delete/:id', delete_company);

module.exports = router;
