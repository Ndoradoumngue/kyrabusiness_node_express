const express = require('express');
const router = express.Router();

const { countries_list, country_details, add_country, update_country, delete_country } = require('../controllers/country_controller');

router.route('/').get(countries_list).post(add_country);
router.route('/:id').get(country_details).put(update_country);

router.put('/delete/:id', delete_country);

module.exports = router;
