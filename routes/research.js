var researchController = require('../controllers/research.js');

// function to check if the user is logged in
function isLoggedIn(req, res, next) {
    // if the user is logged in, call the route, otherwise redirect to the login page
    if(req.isAuthenticated()) {
        return next();
    }

    res.redirect('/login');
}

module.exports = function(app) {

    app.get('/research', isLoggedIn, researchController.showSearchPage);
    
    app.post('/research/papers', isLoggedIn, researchController.getResearchPapers);
    
    app.get('/research/test', isLoggedIn, researchController.test);

};