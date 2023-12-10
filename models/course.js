const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const courseSchema = new Schema({
    name : {
        type:String
    },
    price  : String,

    description: {
        type: String,
      },
      imageUrl: {
        type: String,
      },
      content: {
        lectures: [ {
          lecture: {
            type: Schema.Types.ObjectId,
            ref: 'Content',
          }
        }
        ]
      }
})  
module.exports = mongoose.model('Course', courseSchema);
