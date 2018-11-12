var commentController = require('../controllers/comment.js');
// function to check if the user is logged in
function isLoggedIn(req, res, next) {
    // if the user is logged in, call the route, otherwise redirect to the login page
    if(req.isAuthenticated()) {
        return next();
    }

    res.redirect('/login');
}

module.exports = function(app, User) {

    app.get('/survey/:surveyTitle/comment', isLoggedIn, commentController.showAddSurveyComment);
    
    app.post('/survey/:surveyTitle/comment', isLoggedIn, commentController.addComment);

    app.get('/survey/:surveyTitle/comments', isLoggedIn, commentController.showSurveyComments);
    
}