const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');
const autheticationController = require('../controllers/authentication');
const isAuth = require('../middleware/is-auth');
const router = express.Router();

router.get('/courses',shopController.getCourse)
router.get('/about',shopController.getAbout)
router.get('/contact',shopController.getContact)
router.get('/teachers',shopController.getTeachers);
router.get('/blogs',shopController.getBlogs);
router.post('/postQuery',shopController.postQuery);

router.get("/courseDetail/:courseId",shopController.getCourseDetail);
router.get('/coursePlay/:courseId' ,isAuth,shopController.getCoursePlay)

// router.get('/changeLecture/:lectureId',shopController.getNewLecture)


router.get('/myprofile',shopController.getMyProfile)

// authentication routes

router.get('/signup',autheticationController.getSignUp)
router.get('/login',autheticationController.getLogin)
router.post('/signup',autheticationController.postSignup);
router.post('/login',autheticationController.postLogin);
router.get('/logout',autheticationController.logOut);

router.get('/', shopController.getIndex);


module.exports = router;
