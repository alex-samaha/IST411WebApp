var authController = require('../controllers/auth.js');

// function to check if the user is logged in
function isLoggedIn(req, res, next) {
    // if the user is logged in, call the route, otherwise redirect to the login page
    if(req.isAuthenticated()) {
        return next();
    }

    res.redirect('/login');
}

module.exports = function(app, passport, User) {

    app.get('/', authController.index);

    app.get('/signup', authController.signup);

    app.post('/signup', authController.signupUser);

    app.get('/login', authController.login);

    app.post('/login', passport.authenticate('local', {
            successRedirect: '/home',
            failureRedirect: '/login'
            }
        ));

    app.get('/home', isLoggedIn, authController.home);

}