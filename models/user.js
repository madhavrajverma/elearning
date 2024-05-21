const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
 name: {
        type:String,
    },
  email: {
    type: String,
    required: true
  },
  role: { // added new attribute to distinguish between teacher and student and admin 
    type: String,
    enum : {
      values : ['user', 'admin','writer'],
      message : 'Please select correct role'
  },
    default: 'user',
  },
  password: {
    type: String,
    required: true
  },
  courses: [{
    course : {
        type: Schema.Types.ObjectId,
        ref: 'Course',
    }
  }
  ]
})

userSchema.methods.addNewCourse = function(courseId) {
  const updatedCourse = [...this.courses];
  updatedCourse.push( {
    course:courseId
  })
  this.courses = updatedCourse;
  return this.save(); 
};

userSchema.methods.clearCourses = function() {
  this.courses =  [];
  return this.save();
};

module.exports = mongoose.model('User', userSchema);


