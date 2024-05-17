const mongoose = require('mongoose');

 const connectDatabase = () => {
  mongoose.connect('mongodb+srv://rajmadhavverma175:<madhavraj>@cluster0.dobbykf.mongodb.net/elearning?retryWrites=true&w=majority').then((con) => {
    console.log(
      `MongoDB Database connected with HOST 27017`
    );
  });
};

module.exports = connectDatabase


// mongodb://127.0.0.1:27017/elearning
//mongodb+srv://rajmadhavverma175:<password>@cluster0.dobbykf.mongodb.net/?retryWrites=true&w=majority

