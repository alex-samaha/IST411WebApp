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
    .catch(err, function() {
        console.log(err);
        console.log("Error with getting the research papers");
    });
};
