// imports and module.exports setup
var exports = module.exports = {};
const User = require('../models/user.js');
const passport = require('passport');

exports.index = function(req, res) {
    res.redirect('/login');
};

exports.signup = function(req, res) {
    res.render('CreateAccountUI.ejs');
};

exports.signupUser = function(req, res) {
    // creates a new user object (not yet saved to DB)
    // password is passed outside of the object in order to get hashed
    User.register(new User({username: req.body.username, firstName: req.body.firstName, lastName: req.body.lastName}), req.body.password, 
    function(err, user) {
        if(err) {
            console.log(err);
            return res.render('CreateAccountUI.ejs');
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
    res.render('loginUI.ejs');
};

exports.home = function(req, res) {
    res.render('home');
};