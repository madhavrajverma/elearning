const mongoose = require('mongoose');

 const connectDatabase = () => {
  mongoose.connect('mongodb://127.0.0.1:27017/elearning').then((con) => {
    console.log(
      `MongoDB Database connected with HOST 27017`
    );
  });
};

module.exports = connectDatabase