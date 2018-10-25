// General libraries
const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const cookieParser   = require('cookie-parser');
const methodOverride = require('method-override');
const mongoose       = require('mongoose');
const LocalStrategy  = require('passport-local')
const User           = require('./models/user');

// Passport requirements
const passport       = require('passport');
const session        = require('express-session');

// Database Setup
mongoose.connect("mongodb://localhost/411project");

mongoose.Promise = global.Promise;

// Body Parser / Cookie Parser / Method Override configuration
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use(cookieParser('secret'));
app.use(methodOverride('_method'));

// Passport configuration
app.use(session({ secret: 'ist411application', resave: true, saveUninitialized:true}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());;

// View / view engine setup
app.set('views', './views');
app.set('view engine', 'ejs');

// Routers
const authRouter = require('./routes/auth.js')(app, passport);

// Set the port and start the server
const port = 3000;
app.listen(port, (err) => {
    if(!err) {
        console.log(`Website is running on port ${port}`);
    }
});

