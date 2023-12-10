// import mongoose from "mongoose";
// import courses from "./dataseeder.js";
// import Course from "../models/course.js"

const mongoose = require('mongoose');
const courses  = require('./data.js');
const Course = require('../models/course.js'); 
const Content = require('../models/content.js'); 



const seedProducts = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/elearning");

    await Course.deleteMany();
    console.log("Courses are deleted");

    await Course.insertMany(courses);
    console.log("Courses are added");
     const blogs = await Course.find({});
    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedProducts();


// .populate('content.lectures.lecture');