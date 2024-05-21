const path = require('path');

const express = require('express');

const blogController = require('../controllers/blog');
const autheticationController = require('../controllers/authentication');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

router.get('/createPost',blogController.getCreatePost);
router.post('/storeNewPost',blogController.storeNewPost);
router.get('/blogs',blogController.getAllblogs)
router.get('/blog/:id',blogController.getpostById)



module.exports = router;
