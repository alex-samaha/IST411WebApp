var exports = module.exports = {};
var User = require('../models/user.js');

exports.index = function(req, res) {
    res.redirect('/login');
};

exports.signup = function(req, res) {
    res.render('signup');
};

exports.signupUser = function(req, res) {
    // creates a new user object (not yet saved to DB)
    // password is passed outside of the object in order to get hashed
    User.register(new User({username: req.body.email, firstName: req.body.firstName, lastName: req.body.lastName}), req.body.password, 
    function(err, user) {
        if(err) {
            console.log(err);
            return res.render('signup');
        }
        // if the user is created w/o error, redirect to secret page
        // passport.authenticate logs the user in
        // takes care of the session
        // stores correct info, runs serializeUser method
        // using 'local' strategy which is just username and password
        else {
            passport.authenticate('local')(req, res, function() {
                res.redirect('/home');
            });
        }
            
    });
}

exports.login = function(req, res) {
    res.render('login');
};

exports.home = function(req, res) {
    res.render('home');
}