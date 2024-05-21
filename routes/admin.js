const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');
const autheticationController = require('../controllers/authentication');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

router.get('/dashboard',adminController.getAdminDashboard);


module.exports = router;
