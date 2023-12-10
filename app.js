const path = require('path');
const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const connectDatabase = require('./db/dbconnect') 
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

// sendgrid confirguraion to send mails 
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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')



const app = express();
const store = new MongoDBStore({
          uri:"mongodb://127.0.0.1:27017/elearning",
          collection:'session',
})
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());




connectDatabase();
app.set('view engine', 'ejs');
app.set('views', 'views');
const shopRoutes = require('./routes/shop');
dotenv.config({ path: "config/config.env" });


  

app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret: 'my secret',resave : false,saveUninitialized:false,store:store}));
// app.use('/images', express.static(path.join(__dirname, 'images')));


app.use(shopRoutes);

app.listen(3000, () => {
    console.log("Server started at port 3000");
} 
  
);