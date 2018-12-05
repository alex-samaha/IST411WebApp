let scholar = require('google-scholar');
var exports = module.exports = {};

exports.showSearchPage = function(req, res) {
    res.render('searchPage');
};

exports.getResearchPapers = function(req, res) {
    console.log(req.body);
    scholar.search(req.body.searchTerm)
    .then(resultsObj => {
        console.log(resultsObj);
        res.json(resultsObj);
    })
    .catch(function(err) {
        console.log(err);
        console.log("Error with getting the research papers");
    });
};

exports.test = function(req, res) {
    
    scholar.search('thermodynamics')
    .then(resultsObj => {
        console.log(resultsObj);
        // res.json(resultsObj);
    })
    .catch(function(err) {
        console.log(err);
        console.log("Error with getting the research papers through the get request");
        
    });
}
