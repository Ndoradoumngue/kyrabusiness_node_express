const express = require('express');
const router = express.Router();

const { all_categories, category_data, category_creation, category_update, category_deletion } = require('../controllers/category_controller');

router.route('/').get(all_categories).post(category_creation);
router.route('/:id').get(category_data).put(category_update);
router.put('/delete/:id', category_deletion);

module.exports = router;
