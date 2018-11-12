var surveyController = require('../controllers/survey');

// function to check if the user is logged in
function isLoggedIn(req, res, next) {
    // if the user is logged in, call the route, otherwise redirect to the login page
    if(req.isAuthenticated()) {
        return next();
    }

    res.redirect('/login');
}

module.exports = function(app, User) {

    app.get('/surveys', isLoggedIn, surveyController.showSurveys);

    app.get('/survey/create', isLoggedIn, surveyController.showSurveyCreate);

    app.post('/survey/create', isLoggedIn, surveyController.createSurvey);


}
