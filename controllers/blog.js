
const BlogPost = require('../models/BlogPost.js')
const path = require('path')
const Blog = require('../models/blog.js'); 


// for get a view for creating a new post
exports.getCreatePost = async (req, res, next) => {

    res.render('shop/createpost', {
      path: '/blogs',
      createPost:true,
      isAuthenticated:req.session.isLoggedIn
    })
  }

exports.storeNewPost = async (req, res, next) => {
    const userID = req.session.user._id;
    let image = req.files.image; 
    image.mv(path.resolve(__dirname,'..','public/img',image.name),async (error)=>{
    await BlogPost.create(
    { ...req.body,
         image: '/img/' + image.name,
         userid: userIDmo
     })
    res.redirect('/blogs') })
}


// fetching all blogs 

exports.getAllblogs = async (req,res) => {

    const blogposts = await BlogPost.find({}) // this is from database 
    const blogs = await Blog.find(); // this is skelton data from database

    if(blogs.length>3) {
      const blog1 = blogs[0];
      const blog2 = blogs[1];
      const blog3 = blogs[2];
      const allblogs = blogs.slice(3, blogs.length);

      res.render('shop/blogs', {
        blog1:blog1,
        blog2:blog2,
        blog3:blog3,
        allblogs:blogposts,
        path:'/blogs',
        isAuthenticated:req.session.isLoggedIn
      })
    }else {
      res.render('shop/index',{
        isAuthenticated:req.session.isLoggedIn
      });
    }
}

// get single post by id and

exports.getpostById = async (req,res)=>{
    const blogpost = await BlogPost.findById(req.params.id).populate('userid')
    res.render('shop/blogview',{ 
        blogpost:blogpost,
        path:'/blogs',
        isAuthenticated:req.session.isLoggedIn
     });
}