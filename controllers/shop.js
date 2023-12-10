const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

// Models  IMPORT 
const Course = require('../models/course.js'); 
const User = require('../models/user.js'); 
const Content = require('../models/content.js'); 
const Blog = require('../models/blog.js'); 
const Query = require('../models/query.js'); 

const sgMail = require('@sendgrid/mail');




exports.getIndex = async  (req, res, next) => {

  const courses = await Course.find();
    res.render('shop/index', { 
      courses : courses,
      path:'/',
      isAuthenticated:req.session.isLoggedIn
    });
  };


  exports.getCourse = async (req, res, next) => {
    const courses = await Course.find();
    res.render('shop/courses', {
      courses : courses,
      path: '/courses',
      isAuthenticated:req.session.isLoggedIn
    })
  }

  exports.getAbout = (req, res, next) => {
    res.render('shop/about', {
      path:'/about',
      isAuthenticated:req.session.isLoggedIn
    })
  }

  exports.getCoursePlay = async (req, res, next) => {

    const user = req.session.user._id;
    
    const courseId = req.params.courseId

    // const userDetail =  await User.findById(user).populate('courses.course');

    const course = await Course.findById(courseId).populate('content.lectures.lecture');

    const lectures = course.content.lectures;
    // console.log(userDetail.courses)
    if(lectures.length>0) {
      const lecture = lectures[0].lecture;
    res.render('shop/courseplayview',{ 
      lecture: lecture,
      lectures :lectures,
      path:'/',
      isAuthenticated:req.session.isLoggedIn
    })
  }else {
    res.render('shop/404', {
      path:'/'
    });
  }
}

// Get Teachers
  exports.getTeachers = async (req, res, next) => {
    res.render('shop/teachers', {
      path:'/teachers',
      isAuthenticated:req.session.isLoggedIn
    })
  }


  exports.getCourseDetail = async (req, res, next) => {
    const courseId = req.params.courseId
    const course = await Course.findById(courseId);
    res.render('shop/courseview', {
      course:course, 
      path:'/',
      isAuthenticated:req.session.isLoggedIn
    })
  }


  // Blog  Page Section 
  exports.getBlogs = async (req, res, next) => {
    
    const blogs = await Blog.find();

    if(blogs.length>3) {
      const blog1 = blogs[0];
      const blog2 = blogs[1];
      const blog3 = blogs[2];
      const allblogs = blogs.slice(3, blogs.length);

      res.render('shop/blogs', {
        blog1:blog1,
        blog2:blog2,
        blog3:blog3,
        allblogs:allblogs,
        path:'/blogs',
        isAuthenticated:req.session.isLoggedIn
      })
    }else {
      res.render('shop/index',{
        isAuthenticated:req.session.isLoggedIn
      });
    }

  }


// Contcat Page Section
  exports.getContact = (req, res, next) => {
    res.render('shop/contact', {
      path:'/contact',
      isAuthenticated:req.session.isLoggedIn
    })
  }


  // Post Query related to contact Page
  exports.postQuery = async (req, res, next) => {
    const query = new Query({});
    query.name = req.body.name;
    query.email = req.body.email;
    query.subject =  req.body.subject;
    query.message = req.body.message;
   
// message to deliver
    const msg = {
      to: `rajmadhavverma175@gmail.com`, 
      from: 'rajmadhavverma175@gmail.com', 
      subject: req.body.subject,
      text: `Message from ${req.body.email}:\n${req.body.message}`,
  }

  // saving query in database 
  try {
    await query.save()
    try {
      //sending query to email also
      sgMail.send(msg);
      res.send("Message Successfully Sent!");
    } catch (error) {
      res.send("Message Could not be Sent");
    }

  }catch {
    console.log("Unable to save query")
  }
    // res.redirect('/contact')
  }

  exports.getMyProfile = async (req,res,next) => {
    console.log(req.session.user);
    // const user = User.find({_id:userId});
    // console.log(user);
    res.render('shop/myprofileview', {
      path : 'myprofile',
      isAuthenticated:req.session.isLoggedIn
    })
  }