const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const querySchema = new Schema({
    name : {
        type:String
    },
    email  : String,

    subject: {
        type: String,
      },
      message: {
        type: String,
      },
})

module.exports = mongoose.model('Query', querySchema);
