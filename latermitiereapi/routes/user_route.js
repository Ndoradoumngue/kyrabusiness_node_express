const express = require('express');
const router = express.Router();

const { user_data, user_registration, user_login, user_update } = require('../controllers/user_controller')

router.get('/', user_data);
router.post('/register', user_registration);
router.post('/login', user_login);
router.put('/update/:id', user_update);

module.exports = router;
