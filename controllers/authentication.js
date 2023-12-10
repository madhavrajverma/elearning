const User = require('../models/user.js'); 
const bcrypt = require('bcryptjs');

exports.getSignUp = async  (req, res, next) => {
    res.render('authentication/signup', { 
    });
  };


  exports.postSignup = async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;

    // console.log(email);
    // console.log(password)

    if(password != confirmPassword) {
      res.redirect('/signup');
    }

    const user = await User.findOne({email: email});
    console.log(user);
    if(user) {
      res.redirect('/signup');
    }else {
       const hashedPassword = await bcrypt.hash(password,12);

      const user = new User({
        name : "",
        email :email,
        password:hashedPassword,
        courses : []
      })
      await user.save();
      res.redirect('/login');
    }


  }

  exports.postLogin = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const user = await User.findOne({email: email});
    if(!user) {
      return res.redirect('/login');
    }else {
      const isCorrect = await bcrypt.compare(password,user.password);
      if(!isCorrect) {
        return res.redirect('/login');
      }else {
        req.session.isLoggedIn = true;
        req.session.user = user;
        req.session.save( (err) => {
          return res.redirect('/');
        });
      }
    }
  }

  exports.getLogin = async  (req, res, next) => {
    res.render('authentication/login', { 
    });
  };

  exports.logOut = async (req, res, next) => {
    req.session.destroy( (err) => {
      console.log(err);
      res.redirect('/');
    });
  }