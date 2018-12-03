var exports = module.exports = {};
const Survey = require('../models/survey.js');

exports.showAddSurveyComment = function(req, res) {
    Survey.findOne({title: req.params.surveyTitle}, function(err, survey) {
        res.render('addCommentUI.ejs', {survey: survey});
    });
    
}

exports.addComment = function(req, res) {
    Survey.findOne({title: req.params.surveyTitle}, function(err, survey) {
        survey.comments.push({comment: req.body.comment, username: req.user.username});
        survey.save();
        res.redirect('/surveys');
    });
}

exports.showSurveyComments = function(req, res) {
    Survey.findOne({title: req.params.surveyTitle}, function(err, survey) {
        res.render('commentsUI.ejs', {comments: survey.comments, user: req.user.username, surveyTitle: req.params.surveyTitle});
    });
}

exports.deleteComment = function(req, res) {
    Survey.findOne({title: req.params.surveyTitle}, function(err, survey) {
        for(var i = 0; i < survey.comments.length; i++) {
            if(survey.comments[i].comment == req.params.comment) {
                survey.comments.splice(i, 1);
                survey.save();
                break;
            }
        }

        res.redirect('/surveys');
    });
}