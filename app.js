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

// Database Config
const db = require('./config/keys').mongoURI;
const MongoDBStore = require('connect-mongodb-session')(session);
const store = new MongoDBStore({
    uri: db,
    collection: 'mySessions'
  });
store.on('connected', function() {
    console.log('Store connected');
    store.client; // The underlying MongoClient object from the MongoDB driver
});

// Catch errors
store.on('error', function(error) {
    assert.ifError(error);
    assert.ok(false);
});

// Connect to MongoDB
mongoose
.connect(db, {useNewUrlParser: true})
.then(() => console.log("MongoDB Connection Established"))
.catch(err => console.log(err));

// Database Setup
// mongoose.connect("mongodb://localhost/411project", {useNewUrlParser: true});

mongoose.Promise = global.Promise;



// View / view engine setup
app.set('views', './views');
app.set('view engine', 'ejs');

// CORS Stuff
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  });

// Body Parser / Cookie Parser / Method Override configuration
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use(cookieParser('secret'));
app.use(methodOverride('_method'));

// Passport configuration
app.use(session({ secret: 'ist411application', resave: true, saveUninitialized:true, store: store}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());;

// Routers
const authRouter = require('./routes/auth.js')(app, passport, User);
const surveyRouter = require('./routes/survey')(app, User);
const commentRouter = require('./routes/comments')(app, User);
const researchRouter = require('./routes/research')(app);

// Set the port and start the server
const port = process.env.PORT || 3000;
app.listen(port, (err) => {
    if(!err) {
        console.log(`Website is running on port ${port}`);
    }
});

