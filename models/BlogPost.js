// new model for blogs not related to previous blogs
const mongoose = require('mongoose') 

const Schema = mongoose.Schema;

// blog schema
const BlogPostSchema = new Schema({
    title: String, // tille of blog
    body: String,  // title of body 
   userid: {
       type:mongoose.Schema.Types.ObjectId,
       ref:'User',
       required:true
   },
    datePosted: {
        type:Date,
        default:new Date()
    },
    image: String
})

const BlogPost = mongoose.model('BlogPost',BlogPostSchema)

module.exports = BlogPost;