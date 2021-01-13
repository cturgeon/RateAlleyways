// require("dotenv").config()

const express = require('express');
const bodyParser = require('body-parser')
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const cors = require('cors')


const app = express();

// Passport Config
require('./config/passport')(passport);

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// ejs
app.set('view-engine', 'ejs')

// Express session
app.use(
    session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true
    })
  );

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// connect to mongo
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Database connected!"))
  .catch(err => console.log(err));

const alleywayRoute = require('./routes/alleyways');
app.use('/alleyways', alleywayRoute)
const userRoute = require('./routes/users');
app.use('/users', userRoute)


function loggedIn(req, res, next) {
  if (req.user) {
      next();
  } else {
      res.redirect('/users/login');
  }
}

// homepage of my backend
app.get('/', loggedIn, (req, res) => {
    res.redirect('https://ratealleyways.herokuapp.com/')
})

app.set( 'port', ( process.env.PORT || 5000 ));

// Start node server
app.listen( app.get( 'port' ), function() {
  console.log( 'Node server is running on port ' + app.get( 'port' ));
});

