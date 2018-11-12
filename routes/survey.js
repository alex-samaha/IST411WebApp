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

    app.get('/my-surveys', isLoggedIn, surveyController.showMySurveys);

    app.get('/survey/:surveyTitle/delete', isLoggedIn, surveyController.deleteSurvey);

    app.get('/survey/:surveyTitle/edit', isLoggedIn, surveyController.showEditSurvey);

    app.put('/survey/:surveyTitle/edit', isLoggedIn, surveyController.editSurvey);


}
