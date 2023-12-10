const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    name : {
        type:String
    },
    content: {
        type: String,
      },
      
    img : String,

    
    //   user: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User',
    //   },
})

module.exports = mongoose.model('Blog', blogSchema);
