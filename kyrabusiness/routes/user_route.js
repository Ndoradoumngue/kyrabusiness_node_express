const express = require('express');
const router = express.Router();

const { users_list, user_details, user_registration, user_login, user_update, delete_user } = require('../controllers/user_controller')

router.get('/', users_list);
router.get('/:id', user_details);
router.post('/register', user_registration);
router.post('/login', user_login);
router.put('/update/:id', user_update);
router.put('/delete/:id', delete_user);

module.exports = router;
