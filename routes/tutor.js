
const express = require('express');

const tutorController = require('../controllers/tutor');
const autheticationController = require('../controllers/authentication');
const isAuth = require('../middleware/is-auth');
const router = express.Router();


router.get('/hiretutor',tutorController.gethireTutor);
router.get('/getallTutors',tutorController.getAllTutor);
router.get('/getbooktrial',tutorController.getTutorSingleView)
router.get('/getBook',tutorController.getBook)
module.exports = router;
