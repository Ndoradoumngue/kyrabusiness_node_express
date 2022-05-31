const express = require('express');
const router = express.Router();

const { get_company, add_company, update_company, delete_company } = require('../controllers/company_controller');

router.route('/').get(get_company).post(add_company);
router.route('/:id').put(update_company).delete(delete_company);

module.exports = router;
