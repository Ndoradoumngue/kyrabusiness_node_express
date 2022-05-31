const express = require('express');
const router = express.Router();

const { services_list, service_details, service_add, service_update, delete_service } = require('../controllers/service_controller');

router.route('/').get(services_list).post(service_add);
router.route('/:id').get(service_details).put(service_update);
router.put('/delete/:id', delete_service);

module.exports = router;
