const express = require('express');
const router = express.Router();

const { products_list, product_details, product_add, product_update, product_rating, delete_product } = require('../controllers/product_controller');

router.route('/').get(products_list).post(product_add);
router.route('/:id').get(product_details).put(product_update);
router.put('/rate/:id', product_rating);
router.put('/delete/:id', delete_product);

module.exports = router;
