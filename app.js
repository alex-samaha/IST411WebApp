// General libraries
const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const cookieParser   = require('cookie-parser');
const methodOverride = require('method-override');

// Passport requirements
const passport       = require('passport');
const session        = require('express-session');

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

// Passport strategies

// View / view engine setup
app.set('views', './views');
app.set('view engine', 'ejs');

// Routers

// Set the port and start the server
const port = 3000;
app.listen(port, (err) => {
    if(!err) {
        console.log(`Website is running on port ${port}`);
    }
});

