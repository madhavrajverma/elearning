const path = require('path');
const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const connectDatabase = require('./db/dbconnect') 
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const mongoose = require('mongoose');


// sendgrid confirguraion to send mails 
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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')

const MONGODB_URI = 'mongodb+srv://rajmadhavverma175:madhavraj@cluster0.dobbykf.mongodb.net/elearning?retryWrites=true&w=majority'


const app = express();
const store = new MongoDBStore({
          uri: MONGODB_URI,
          collection:'session',
})
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());




// connectDatabase();
app.set('view engine', 'ejs');
app.set('views', 'views');
const shopRoutes = require('./routes/shop');
dotenv.config({ path: "config/config.env" });


  

app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret: 'my secret',resave : false,saveUninitialized:false,store:store}));
// app.use('/images', express.static(path.join(__dirname, 'images')));


app.use(shopRoutes);


mongoose.connect(MONGODB_URI)
  .then(result => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
