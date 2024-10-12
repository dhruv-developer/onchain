const express = require('express');
const { createUser } = require('../controllers/userController');

const router = express.Router();

// POST /api/users
router.post('/users', createUser);

module.exports = router;
